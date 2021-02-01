String.prototype.uc_first = function() {
    const value = this.valueOf();

    return value.charAt(0).toUpperCase() + value.slice(1);
}

String.prototype.capitalize = function() {
    const value = this.valueOf();

    return value.toLowerCase().split(" ").map(word => ucfirst(word)).join(" ");
}

String.prototype.camel_case = function() {
    const value = this.valueOf();

    return capitalize(value).replace(/\W/g,"");
}

String.prototype.snake_case = function() {
    const value = this.valueOf();

    return value.toLowerCase().replace(/(\W)+/g,"-");
}
