import {expect}  from "@jest/globals";
import superagent, { Response } from "superagent";
import * as getPostComments from "../../hw18/schema/get-post-comments.schema.json";
import { validateSchema } from "../../hw18/helpers";

let response: Response;
const BASE_URL = `https://jsonplaceholder.typicode.com`;
const NUMBER_OF_POSTS = 100;
const NUMBER_OF_COMMENTS_TO_ONE_POST = 5;
const postNo = Math.floor(Math.random() * NUMBER_OF_POSTS) + 1;
const myPost: { name: string, age: number } = {
    "name": "Lena",
    "age": 27
};
const updatePost: { id: number, title: string, body: string } = {
    id: 15354,
    title: "hello, world!",
    body: "dure lex sed lex "
};

describe(`Testing HTTP methods on JSONplaceholder`, () => {
    test(`Should correctly read comments to posts`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/posts/${postNo}/comments`)
        } catch (err: any) { throw new Error(err.message) }
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(NUMBER_OF_COMMENTS_TO_ONE_POST);
    })

    test(`Should correctly check GET response body`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/posts/${postNo}/comments`)
        } catch (err: any) { throw new Error(err.message) }
        validateSchema(getPostComments, response.body);
    })

    test(`Should correctly process non-existing post`, async () => {
        try {
            response = await superagent.get(`${BASE_URL}/posts/${NUMBER_OF_POSTS + 1}`)
        } catch (err: any) {
            expect(err.status).toBe(404);
        }})

    test(`Should correctly DELETE post`, async () => {
        try {
            response = await superagent.delete(`${BASE_URL}/posts/${postNo}`);
        } catch (err: any) { throw new Error(err.message) }
        expect(response.status).toBe(200);
        expect(response.body).toEqual({})
    })

    test(`Should correctly DELETE unexisting post`, async () => {
        try {
            response = await superagent.delete(`${BASE_URL}/poss`);
        } catch (err: any) {
            expect(err.status).toBe(404)
            expect(err.message).toBe("Not Found") }
    })

    test(`Should correctly do PUT method`, async () => {
        try {
            response = await superagent.put(`${BASE_URL}/posts/${postNo}`)
                .set("Content-type", "application/json")
                .send(myPost)
        } catch (err: any) { throw new Error(err.message) }
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(myPost);
        expect(response.text).not.toContain("title");
    })

    test(`Should correctly process incorrect PUT method`, async () => {
        try {
            response = await superagent.put (`${BASE_URL}/poss/${postNo} + 1`)
                .set("Content-type", "application/json")
                .send(myPost)
        } catch (err: any) { expect(err.message).toBe("Not Found")};
    })

    test(`Should correctly do POST method`, async () => {
        try {
            response = await superagent.post(`${BASE_URL}/posts`)
                .set("Content-type", "application/json")
                .send(myPost)
        } catch (err: any) { throw new Error(err.message) };
        expect(response.status).toBe(201);
        expect(response.body.id).toBe(NUMBER_OF_POSTS + 1);
        expect(response.body).toMatchObject(myPost)
    })

    test(`Should correctly process incorrect POST method`, async () => {
        try {
            response = await superagent.post(`${BASE_URL}/propr`)
                .set("Content-type", "application/json")
                .send(myPost)
        } catch (err: any) {
            expect(err.status).toBe(404)
        }
    })

    test(`Should correctly do PATCH method`, async () => {
        try {
            response = await superagent.patch(`${BASE_URL}/posts/${postNo}`)
                .set("Content-type", "application/json")
                .send(updatePost)
        } catch (err: any) { throw new Error(err.message) };
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(updatePost);
    })
})
