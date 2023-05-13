import { expect } from "@jest/globals";
import superagent, { Response } from "superagent"

let response: Response;
const NUMBER_OF_POSTS = 100;
const NUMBER_OF_USERS = 10;
const NUMBER_OF_ALBUMS = 100;
const BASE_URL = `https://jsonplaceholder.typicode.com`;
const postNo = Math.floor(Math.random() * NUMBER_OF_POSTS) + 1;
const userNo = Math.floor(Math.random() * NUMBER_OF_USERS) + 1;
const albumNo = Math.floor(Math.random() * NUMBER_OF_ALBUMS) + 1;
const postCreated = {
    title: 'Marilyn Manson',
    body: 'Sweet dreems are made of this',
    userId: Math.floor(Math.random() * NUMBER_OF_USERS)
}
const myAlbum = {
    userId: Math.floor(Math.random() * NUMBER_OF_ALBUMS),
    title: 'Per aspera ad astra'
}

describe(`Testing HTTP methods`, () => {
    test(`Should correctly read GET response`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/users`);
        } catch (err: any) { throw new Error(err.message); }

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(NUMBER_OF_USERS);
    })

    test(`Should correctly GET post № ${postNo}`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/posts/${postNo}`);
        } catch (err: any) { throw new Error(err.message); }

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(postNo);
    })

    test(`Should correctly GET posts with definite userId ${userNo}`, async () => {
        try {
            response = await superagent
                .get(`${BASE_URL}/posts`)
                .query({ userId: userNo })
        } catch (err: any) { throw new Error(err.message); }

        expect(response.status).toBe(200);
        response.body.forEach((post: any) => {
            expect(post.userId).toBe(userNo)
        })
    })

    test(`Should correctly handle non-existing post`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/posts/${NUMBER_OF_POSTS + 5}`);
        } catch (err: any) {
            expect(err.status).toBe(404);
        }
    })

    test(`Should create a new post with POST method`, async () => {
        try {
            response = await superagent.post(`${BASE_URL}/posts`)
                .set("Content-type", "application/json")
                .send(postCreated);
        } catch (err: any) {
            throw new Error(err.message)}
            expect(response.status).toBe(201)
            expect(response.body).toMatchObject(postCreated)
    })
    })