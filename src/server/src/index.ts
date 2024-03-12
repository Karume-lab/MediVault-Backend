import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory } from "./../../declarations/api";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.get("/test", async (req: Request, res: Response) => {
  // try {
    const getTest = async () => {
      const agent = new HttpAgent({
        host: "http://127.0.0.1:4943",
        verifyQuerySignatures: false,
      });
      const testActor = Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai"),
      });
      const str = await testActor.hello();
      return str;
    };
    const testString = await getTest();
    return res.status(200).json({ testString: testString });
//   } catch (error) {
//     return res.status(404).json({ notFound: "Server Error" });
//   }
});

app
  .listen(PORT, () => {
    console.log(`Server running at: http://127.0.0.1:${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
