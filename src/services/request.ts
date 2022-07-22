import md5 from "md5";
import { api } from "./api";

const limit = 20;
const initialOffset = 20;

const ts = process.env.REACT_APP_TS;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const hash = publicKey && privateKey && md5(ts + privateKey + publicKey);

const params = {
  limit,
  offset: initialOffset,
  ts,
  apikey: publicKey,
  hash,
};

export const getCharacters = async (search?: string, offset?: number) => {
  const newParams = search
    ? { ts, apikey: publicKey, hash, name: search }
    : offset ? {...params, offset: offset} 
    : params;

  const response = await api
    .get("/characters", { params: newParams })
    .then((response) => response).catch(error => console.log(error));
  return response;
};

export const getCharacter = async (id: number) => {
  const newParams = { ts, apikey: publicKey, hash };
  const character = await api
    .get(`/characters/${id}`, {
      params: newParams,
    })
    .then((response) => response);

  return character;
};

export const getComicsOfCharacter = async (id: number, offset?: number) => {
  const newParams = offset ? { ts, apikey: publicKey, hash, offset } :{ ts, apikey: publicKey, hash };
  const comics = await api
    .get(`/characters/${id}/comics`, { params: newParams })
    .then((response) => response);
  return comics;
};
