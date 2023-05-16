import { expect } from "@jest/globals";
import superagent, { Response } from "superagent"

let response: Response;
const NUMBER_OF_POSTS = 100;
const BASE_URL = `https://jsonplaceholder.typicode.com`;
const postNo = Math.floor(Math.random() * NUMBER_OF_POSTS) + 1;
const NUMBER_OF_USERS = 10;
const postCreated = {
    title: 'Marilyn Manson',
    body: 'Sweet dreems are made of this',
    userId: Math.floor(Math.random() * NUMBER_OF_USERS)
}

describe(`Testing HTTP methods on JSONplaceholder`, () => {
    test(`Should correctly read GET response`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/posts`);
        } catch (err: any) { throw new Error(err.message); }

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(NUMBER_OF_POSTS);
    })

    test(`Should correctly GET post № ${postNo}`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/posts/${postNo}`);
        } catch (err: any) { throw new Error(err.message); }

        expect(response.status).toBe(200);
        expect(response.body.id).toBe(postNo);
    })

    test(`Should correctly GET posts with definite postId ${postNo}`, async () => {
        try {
            response = await superagent
                .get(`${BASE_URL}/posts`)
                .query({ userId: postNo })
        } catch (err: any) { throw new Error(err.message); }

        expect(response.status).toBe(200);
        response.body.forEach((post: any) => {
            expect(post.userId).toBe(postNo)
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

    test(`Should testing HTTP PATCH method`, async () => {
        try {
            response = await superagent
            .patch(`${BASE_URL}/posts/5`)
            .set("Content-type", "application/json")
            .send({ });

    })