import axios from "axios";
import axiosClient from "../../../api/axiosClient";

export const MatchApi = {
  createMatch: async (params: any) => {
    const url = "/match";
    const res = await axiosClient.post(url, params);
    console.log("MatchApi + createMatch response : ", res);
    return res.data;
  },
  getMatchDetail: async (id: string) => {
    const url = "/match/" + id;
    const res = await axiosClient.get(url);
    return res.data;
  },
  joinMatch: async (id: string, params: { birdChallengerId: string }) => {
    const url = "/match/join/" + id;
    const res = await axiosClient.put(url, params);
    return res?.data;
  },
  matchReady: async (params: { matchId: string; birdId: string }) => {
    const url = "/match-bird/challenger/ready";
    const res = await axiosClient.put(url, params);
    return res?.data;
  },
  matchConfirm: async (matchId: string) => {
    const url = "/match/confirm/" + matchId;
    const res = await axiosClient.put(url);
    return res?.data;
  },
  getMatchFilter: async ({
    matchStatus,
    role,
  }: {
    role: "host" | "challenger";
    matchStatus: "waiting" | "pending" | "during" | "completed" | "cancelled";
  }) => {
    const url = `/match/owner/${role}/${matchStatus}`;
    const response = await axiosClient.get(url);
    return response.data;
  },
  updateResult: async ({ matchId, birdId, result }: any) => {
    const url = "/match-bird/result/" + matchId;
    const res = await axiosClient.put(url, { result, birdId });
    return res.data;
  },
};
