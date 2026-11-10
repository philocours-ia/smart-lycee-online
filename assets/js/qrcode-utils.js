export function genererCodeVerification() {

    return (
        "SLO-" +
        Date.now().toString(36).toUpperCase() +
        "-" +
        Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase()
    );

}