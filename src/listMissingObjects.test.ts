import listMissingObjects from "./listMissingObjects";

test("sum adds two numbers", () => {
  expect(
    listMissingObjects(
      [
        { id: 1, name: "fred" },
        { id: 3, name: "omar" },
        { id: 17, name: "neto" },
      ],
      [
        { id: 2, name: "allie" },
        { id: 20, name: "omar" },
        { id: 17, name: "neto" },
      ],
    ),
  ).toEqual([{ id: 1, name: "fred" }]);
});

// test("sum adds two numbers cancelling", () => {
//   expect(sum(-4, 4)).toBe(0);
// });
