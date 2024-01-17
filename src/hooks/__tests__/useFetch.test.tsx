import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "../useFetch";
import { act } from "react-dom/test-utils";

describe("useFetch", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    (console.error as jest.Mock).mockRestore();
  });

it("fetches data successfully", async () => {
  const mockSuccessResponse = { localTags: { message: "Success" } };
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockSuccessResponse),
    })
  );

  const { result } = renderHook(() => useFetch("https://api.example.com/data"));

  await act(async () => {
    await waitFor(() => expect(result.current.loading).toBe(true));
  });

  await act(async () => {
    await waitFor(() => expect(result.current.data).toEqual({ message: "Success" }));
  });

  expect(result.current.error).toBeNull();
  expect(result.current.loading).toBe(false);

  (global.fetch as jest.Mock).mockRestore();
});
  it("handles fetch error", async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error("Fetch failed")));

    const { result } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    await waitFor(() => expect(result.current.data).toBe(null));

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error("Fetch failed"));

    (global.fetch as jest.Mock).mockRestore();
  });
});
