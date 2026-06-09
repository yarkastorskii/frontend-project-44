export function atb(answ) {
    const Answer = String(answ).trim().toLowerCase();
    if (Answer === Boolean) return Answer
    if (Answer == 1 || Answer == "yes") {
        return true
    } else if (Answer == 0 || Answer == "no") {
        return false
    } else {
        console.log(`incorrect input "${Answer}"`);
        return 0;
    }
}