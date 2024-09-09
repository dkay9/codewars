/* Remove Exclamation Mark */

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.replace(/!/g, ''); // the regular expression checks for all occurrence of '!' in the srting and removes them
}