import { Request, Response } from "express";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { idlFactory } from "./../../../declarations/api";
import { ECDSAKeyIdentity } from "@dfinity/identity";

const addDoctor = async (req: Request, res: Response) => {
  //   const identity = await ECDSAKeyIdentity.generate();
  console.log(req.body);
  return res.status(201).json(req.body);
  //   try {
  //     const getDoctorsAPI = async () => {
  //       const agent = new HttpAgent({
  //         host: "http://127.0.0.1:4943",
  //         verifyQuerySignatures: false,
  //       });
  //       const doctorActor = Actor.createActor(idlFactory, {
  //         agent,
  //         canisterId: Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai"),
  //       });
  //       const doctors = await doctorActor.getDoctors();
  //       return doctors;
  //     };

  //     const doctors = getDoctorsAPI();
  //     return res.status(200).json({ doctors });
  //   } catch (error) {
  //     return res.status(404).json({ notFound: "Server Error" });
  //   }
};

const getDoctor = async (req: Request, res: Response) => {
  try {
    const getDoctorsAPI = async () => {
      const agent = new HttpAgent({
        host: "http://127.0.0.1:4943",
        verifyQuerySignatures: false,
      });
      const doctorActor = Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai"),
      });
      const doctor = await doctorActor.getDoctor(
        "c4936453-ec1d-47cf-87fe-7159543b7382"
      );
      return doctor;
    };

    const doctors = getDoctorsAPI();
    return res.status(200).json({ doctors });
  } catch (error) {
    return res.status(404).json({ notFound: "Server Error" });
  }
};

const getDoctors = async (req: Request, res: Response) => {
  try {
    const getDoctorsMethod = async () => {
      const agent = new HttpAgent({
        host: "http://127.0.0.1:4943",
        verifyQuerySignatures: false,
      });
      const doctorActor = Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai"),
      });
      const doctors = await doctorActor.getDoctors();
      return doctors;
    };

    const doctors = getDoctorsMethod();
    return res.status(200).json({ doctors });
  } catch (error) {
    return res.status(404).json({ notFound: "Server Error" });
  }
};

const updateDoctor = async (req: Request, res: Response) => {
  try {
    const getDoctorsMethod = async () => {
      const agent = new HttpAgent({
        host: "http://127.0.0.1:4943",
        verifyQuerySignatures: false,
      });
      const doctorActor = Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai"),
      });
      const doctors = await doctorActor.getDoctors();
      return doctors;
    };

    const doctors = getDoctorsMethod();
    return res.status(200).json({ doctors });
  } catch (error) {
    return res.status(404).json({ notFound: "Server Error" });
  }
};

const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const getDoctorsMethod = async () => {
      const agent = new HttpAgent({
        host: "http://127.0.0.1:4943",
        verifyQuerySignatures: false,
      });
      const doctorActor = Actor.createActor(idlFactory, {
        agent,
        canisterId: Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai"),
      });
      const doctors = await doctorActor.getDoctors();
      return doctors;
    };

    const doctors = getDoctorsMethod();
    return res.status(200).json({ doctors });
  } catch (error) {
    return res.status(404).json({ notFound: "Server Error" });
  }
};

export { addDoctor, getDoctor, getDoctors, updateDoctor, deleteDoctor };
