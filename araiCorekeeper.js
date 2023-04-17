const os = require('os');
Bun.serve({
        port: 8082,
        fetch: async (req) => {
                const url = new URL(req.url);
                if (url.pathname === "/status") {return new Response("<!DOCTYPE html><html><head><title>ARAI WORLD core keeper server</title><meta charset=\"UTF-8\"></head><body><h3>memory</h3><div>"+(1-(os.freemem()/os.totalmem()))*100+"%</div></body></html>",
                {headers:{
        "content-type":req.headers.get("content-type"),
                },
                });
                }
                return new Response("<!DOCTYPE html><html><head><title>ARAI WORLD core keeper server</title><meta charset=\"UTF-8\"></head><body><h1>our incredible core keeper server is running!</h1><div>key is:</div><div><i>hidden on git!</i><div><div>毎日AM 6:45再起動</div></body></html>",
                {headers:{
        "content-type":req.headers.get("content-type"),
                },
                });
        },
});              
