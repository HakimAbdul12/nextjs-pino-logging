import { log } from "@/lib/serverLogger";

export async function POST(req, resp) {
    try {
        const requestBody = await req.json();
        console.log(requestBody);

        const { level, msg } = requestBody;

        if (!level || !msg) {
            throw new Error('Invalid request body');
        }

        log[level](msg);
        
        return new Response('Hello World',{
            status: 200
        })
    } catch (error) {
        log.error(`Error handling log request: ${error.message}`);
        return new Response(error.message, { status: 500 });
    }
  }