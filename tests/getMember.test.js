import { describe, it, expect } from 'vitest'
import { findMember } from '../src/utils/findMember';

describe('Testing the GetMember Function.', () => {
  it.concurrent('Should return undefined', async () => {
    let data = await findMember({token: "MTAzMjgzNjE4MzA2NTExNjcyMg.GiGR8a.4Y0fFT8F2l5zbTJeg76y0tQmkDEPz4Z8FPalo0"}, {id: "1027952684155814000"}, "289");

    expect(data).toBe(undefined);
  });

  it.concurrent('Should return guild object', async () => {
    let data = await findMember({token: "MTAzMjgzNjE4MzA2NTExNjcyMg.GiGR8a.4Y0fFT8F2l5zbTJeg76y0tQmkDEPz4Z8FPalo0"}, {id: "1027952684155814000"}, "964419325148680202");

    expect(data).not.toBe(undefined)
  });
})