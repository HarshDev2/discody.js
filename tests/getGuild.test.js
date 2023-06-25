import { describe, it, expect } from 'vitest'
import { getGuild } from '../src/utils/getGuild'

describe('Testing the GetGuild Function.', () => {
  it.concurrent('Should return undefined', async () => {
    let data = await getGuild({token: "MTAzMjgzNjE4MzA2NTExNjcyMg.GiGR8a.4Y0fFT8F2l5zbTJeg76y0tQmkDEPz4Z8FPalo0"}, 0);

    expect(data).toBe(undefined);
  });

  it.concurrent('Should return guild object', async () => {
    let data = await getGuild({token: "MTAzMjgzNjE4MzA2NTExNjcyMg.GiGR8a.4Y0fFT8F2l5zbTJeg76y0tQmkDEPz4Z8FPalo0"}, 1027952684155814000);

    expect(data).not.toBe(undefined)
  });
})