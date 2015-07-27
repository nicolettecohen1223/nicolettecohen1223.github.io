//project 1, Part 2-A 
var pluralizer = function(string) {


    var last_character = string.slice(-1);


    var list_endings = ["x", "y", "s"];

    var found = list_endings.indexOf(last_character);
    //need to now search through the list and check if the last character matches it


    if (found == 0 || found == 2) {
        new_string = string + "es";
    } else if (found == 1) {
        add_ies = string.replace("y", "ies");
        new_string = add_ies;
    } else {
        new_string = string + "s";
    }
    return new_string;

};








//project 1, Part 2-B



var countDivBy3 = function(n) {

    var count = 0;

    for (var i = 1; i <= n; i++) {
        //does he want it to include n?
        if (i % 3 == 0) {
            count++;
        }

    }
    return count;



};





//project 1, req. 2-D

var isVowel = function(ch) {
    //ch=ch.toLowerCase();
    var vowels = /[aeiouy]/i;

    return vowels.test(ch);


};



//2-C

var reverseWords = function(sentence) {

    old_list = [];

    var spaces = '';
    var reverse_list = '';

    var limit = sentence.length;

    for (var i = 0; i < limit; i++) {
        if (sentence[i] != ' ') {
            spaces += sentence.charAt(i);

        } else {
            old_list.push(spaces);
            spaces = '';
        }

    }

    old_list.push(spaces);

    var amount = old_list.length - 1;

    for (var j = amount; j > 0; j--) {
        reverse_list += (old_list[j] + " ");


    }

    reverse_list += (old_list[0]);

    return reverse_list;

};







//project 1, req. 2-E 

var isConsonant = function(ch) {
    //ch=ch.toLowerCase();
    var vowels = /[^aeiouy]/i;

    return vowels.test(ch);


};


//2-F



var countVowelPrefixWords = function(string) {

    var old_list = [];
    var new_list = '';
    var count = 0;
    var more_words = ' ';
    var vowels;
    var limit = string.length;


    for (var i = 0; i < limit; i++) {

        if (string[i] != " ") {

            new_list += string.charAt(i);

        } else {
            old_list.push(new_list);
            new_list = '';
        }

    }

    old_list.push(new_list);


    array_number = old_list.length;

    for (var j = 0; j < array_number; j++) {

        more_words = old_list[j];
        vowels = /[aeiouy]/i;


        var first_test = vowels.test(more_words.substring(0, 1));
        var second_test = vowels.test(more_words.substring(1, 2));


        if (first_test == true && second_test == true) {

            count++;
            more_words = ' ';
        }


    }

    return count;

};




