module.exports = {
    isFuture: function (date) {
        var today = Date.now();

        return date.getTime() > today;
    }
};
