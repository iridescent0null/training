Bun.serve({
        port: 8082,
        fetch: async (req) => {return new Response("<!DOCTYPE html><html><head><title>ARAI WORLD core keeper server</title><meta charset=\"UTF-8\"></head><body><h1>our core keeper server is running!</h1><div>key is:</div><div><i>key code will appear here</i><div></body></html>",
                {headers:{
        "content-type":req.headers.get("content-type"),
                },
                });
        },
});

