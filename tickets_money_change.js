/**
 * @description Calculate change
 *
 * @param {Number} bill - one of 25, 50, 100
 * @returns {Array} result [{ note50: 1, note25: 1 }, { note50: 0, note25: 3 }]
 */
function change(bill) {
    if (bill === 100) {
        return [{ note50: -1, note25: -1 }, { note50: 0, note25: -3 }];
    } else if (bill === 50) {
        return [{ note50: 1, note25: -1 }];
    } else if (bill === 25) {
        return [{ note50: 0, note25: 1 }];
    }
    return null;
}

/**
 * @description Diff result of notes
 *
 * @param {Object} currentNotes - { note50: 10, note25: 10 }
 * @param {Object} diffNotesArr - [{ note50: 1, note25: 1 }, { note50: 0, note25: 3 }]
 * @returns {Object} result { note50: 9, note25: 9 }
 */
function getDiffNotes(currentNotes, diffNotesArr) {
    for (let i = 0; i < diffNotesArr.length; i++) {
        diffNotes = diffNotesArr[i];
        const note50 = currentNotes.note50 + diffNotes.note50;
        const note25 = currentNotes.note25 + diffNotes.note25;
        if ( note50 >= 0 && note25 >= 0) {
            return { note50, note25 }
        }
    }
    return null;
}

function tickets(peopleInLine){
    let notes = { note50: 0, note25: 0 };
    for (let i = 0; i < peopleInLine.length; i++) {
        const diffNotesArr = change(peopleInLine[i]);
        console.log('diffNotesArr', diffNotesArr);
        const newNotes = getDiffNotes(notes, diffNotesArr);
        console.log('newNotes', newNotes);
        if (!newNotes) {
            return 'NO';
        }
        notes = newNotes;
    }
  return 'YES';
}

// const peopleInLine = [25, 25, 50, 50]; // => YES
const peopleInLine = [25, 100]; // => NO

console.log(tickets(peopleInLine))