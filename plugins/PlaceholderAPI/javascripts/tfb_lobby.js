var lang = "";
var type = "";
function tfbLobby() {
    if (args.length == 2) {
        type = args[0];
        lang = args[1];
    }

    if (type == "name") {
        switch (lang) {
            case "danish":
                return "&dLobby";
                break;
            default:
                return "&dLobby";
        }

    } else if (type == "lore") {
        switch (lang) {
            case "danish":
                return "&eSprog&8: &7Dansk/Engelsk\\n&eKlik for at joine nu!";
                break;
            default:
                return "&eLanguage&8: &7Danish/English\\n&eClick to connect now!";
        }
    } else if (type == "message") {
        switch (lang) {
            case "danish":
                return "&ahttps://stats.theflyingbirds.net:8804 &8<- &eKlik her for at joine!";
                break;
            default:
                return "&ahttps://stats.theflyingbirds.net:8804 &8<- &eClick me to see stats";
        }
    } else { return "error"; }
}

tfbLobby();