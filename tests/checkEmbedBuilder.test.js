import { describe, it, expect } from 'vitest';
import { EmbedBuilder } from '../src/core/embed_builder';

describe('Testing the EmbedBuilder class.', () => {
  it.concurrent('Create a basic embed', async () => {
    const embed = new EmbedBuilder()
      .setTitle('Hello World')
      .setDescription('This is a test embed')
      .setColor('#ff0000')
      .setAuthor({ name: 'John Doe', url: 'https://example.com', icon_url: 'https://example.com/avatar.png' })
      .setFooter({ text: 'Footer Text', icon_url: 'https://example.com/footer_icon.png' })

    expect(embed).toEqual({
        embed: {
      title: 'Hello World',
      description: 'This is a test embed',
      color: '#ff0000',
      author: {
        name: 'John Doe',
        url: 'https://example.com',
        icon_url: 'https://example.com/avatar.png',
      },
      footer: {
        text: 'Footer Text',
        icon_url: 'https://example.com/footer_icon.png',
      },
    }
    });
  });

  it.concurrent('Add a thumbnail and a video', async () => {
    const embed = new EmbedBuilder()
      .setTitle('Embed with Media')
      .setDescription('This embed contains a thumbnail and a video')
      .setThumbnail({ url: 'https://example.com/thumbnail.png', width: 100, height: 100 })
      .setVideo({ url: 'https://example.com/video.mp4', width: 640, height: 360 });

    expect(embed).toEqual({
        embed: {
      title: 'Embed with Media',
      description: 'This embed contains a thumbnail and a video',
      thumbnail: {
        url: 'https://example.com/thumbnail.png',
        width: 100,
        height: 100,
      },
      video: {
        url: 'https://example.com/video.mp4',
        width: 640,
        height: 360,
      },
    }
    });
  });

  it.concurrent('Add a provider and multiple fields', async () => {
    const embed = new EmbedBuilder()
      .setTitle('Embed with Provider and Fields')
      .setDescription('This embed has a provider and multiple fields')
      .setProvider({ name: 'Example Provider', url: 'https://exampleprovider.com' })
      .addField({ name: 'Field 1', value: 'Value 1', inline: true })
      .addField({ name: 'Field 2', value: 'Value 2', inline: true })
      .addField({ name: 'Field 3', value: 'Value 3' });

    expect(embed).toEqual({
        embed: {
      title: 'Embed with Provider and Fields',
      description: 'This embed has a provider and multiple fields',
      provider: {
        name: 'Example Provider',
        url: 'https://exampleprovider.com',
      },
      fields: [
        { name: 'Field 1', value: 'Value 1', inline: true },
        { name: 'Field 2', value: 'Value 2', inline: true },
        { name: 'Field 3', value: 'Value 3' },
      ],
    }
    });
  });
});
