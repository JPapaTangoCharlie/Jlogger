/**
 * Jlogger class for logging formated messages with timestamps and optional widget output.
 * 12/2/2024 - Committed & Shared.
 */
class Jlogger {
    #showOutput;
    #sectionName;
    #localDisplayFunction;
    #log;
    #widgetOutput;

    /**
     * Creates an instance of Jlogger.
     * @param {string} [loggerName="NameNotSet"] - The name of the logger.
     * @param {string} sectionName - The section name for the logger.
     */
    constructor(loggerName = "NameNotSet", sectionName) {
        this.loggerName = loggerName;
        this.#showOutput = true;
        this.#sectionName = sectionName;
        this.#widgetOutput = false;
        this.#log = "";
    }

    /**
     * Gets the section name.
     * @returns {string} The section name.
     */
    getAppName() {
        return this.#sectionName;
    }

    /**
     * Gets the show output flag.
     * @returns {boolean} The show output flag.
     */
    getShowOutput() {
        return this.#showOutput;
    }

    /**
     * Sets the show output flag.
     * @param {boolean} bval - The new value for the show output flag.
     */
    setShowOutput(bval) {
        this.#showOutput = bval;
    }

    /**
     * Sets the widget output flag.
     * @param {boolean} b - The new value for the widget output flag.
     */
    setWidgetOut(b) {
        this.#widgetOutput = b;
    }

    /**
     * Sets the local display function.
     * @param {Function} func - The function to use for local display.
     */
    setWidgetOutFunc(func) {
        this.#localDisplayFunction = func;
    }

    /**
     * Generates a date-time string in the format YYYY/MM/DD HH:MM:SS:MS.
     * @returns {string} The formatted date-time string.
     */
    dateTimeStr() {
        var m = new Date();
        var dateString =
            m.getUTCFullYear() + "/" +
            ("0" + (m.getMonth() + 1)).slice(-2) + "/" +
            ("0" + m.getDate()).slice(-2) + " " +
            ("0" + m.getHours()).slice(-2) + ":" +
            ("0" + m.getMinutes()).slice(-2) + ":" +
            ("0" + m.getSeconds()).slice(-2) + ":" +
            ("0" + m.getMilliseconds()).slice(-2);

        return dateString;
    }

    /**
     * Clears the log.
     */
    flushLog() {
        this.#log = "";
    }

    /**
     * Builds a string of tab characters for indentation.
     * @param {number} tn - The number of tabs.
     * @returns {string} The string of tabs.
     */
    buildTabs(tn) {
        let tbs = "";
        for (let x = 1; x < tn; x++) {
            tbs = tbs + '\t';
        }
        if (tn == 1) { tbs = "\t"; }
        return tbs;
    }

    /**
     * Outputs a message with optional location and depth.
     * @param {string} m - The message to log.
     * @param {string} [l=""] - The location.
     * @param {number} [d=0] - The depth for indentation.
     */
    output(m, l = "", d = 0) {
        if (this.#showOutput) {
            let dt_str = this.dateTimeStr();
            let displaymsg = "##### " + dt_str + " # - " + this.loggerName + " [" + this.#sectionName + "]" + " : ";
            let tabIndent = "";
            if (l.length > 0) { displaymsg = displaymsg + "(" + l + ")"; }
            if (d > 0) { tabIndent = this.buildTabs(d); }
            console.log(displaymsg + " " + tabIndent + m);

            // Capture Running Log for future local display if needed.
            // May consider watching this and using some purging at certain points.
            this.#log = this.#log + displaymsg + " " + tabIndent + m + "\n";

            if (this.#widgetOutput) {
                this.#localDisplayFunction.call(this, this.#log);
            }
        }
    }
}