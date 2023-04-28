const solution = (s) => {
    let answer = s
        .toLowerCase()
        .split(" ")
        .map(i => i.charAt(0).toUpperCase() + i.substring(1))
        .join(" ");

    return answer;
}