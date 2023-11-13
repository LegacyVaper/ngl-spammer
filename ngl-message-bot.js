const crypto = require("crypto");

let counter = 0;

const sendMessage = async (username, message) => {
    while (true) {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
        try {
            const deviceId = crypto.randomBytes(21).toString("hex");
            const url = "https://ngl.link/api/submit";
            const headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Referer": `https://ngl.link/${username}`,
                "Origin": "https://ngl.link"
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: "POST",
                headers,
                body,
                mode: "cors",
                credentials: "include"
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
