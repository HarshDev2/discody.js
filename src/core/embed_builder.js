/**
 * Helper class for building Discord message embeds.
 * @class
 */
export class EmbedBuilder {
    /**
     * Create a new EmbedBuilder instance.
     * @constructor
     */
    constructor(){
        this.embed = {};
    }
    
    /**
     * Set the title of the embed.
     * @param {string} title - The title text.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setTitle(title){
        this.embed.title = title;
        return this;
    }
    
    /**
     * Set the description of the embed.
     * @param {string} description - The description text.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setDescription(description){
        this.embed.description = description;
        return this;
    }
    
    /**
     * Set the color of the embed.
     * @param {number} color - The color value.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setColor(color){
        this.embed.color = color;
        return this;
    }
    
    /**
     * Set the author of the embed.
     * @param {Object} author - The author information.
     * @param {string} author.name - The author's name.
     * @param {string} [author.url] - The URL associated with the author.
     * @param {string} [author.icon_url] - The URL of the author's icon.
     * @param {string} [author.proxy_icon_url] - The proxy URL of the author's icon.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setAuthor({ name, url, icon_url, proxy_icon_url }) {
        this.embed.author = {};
        this.embed.author.name = name;
        if (url) {
            this.embed.author.url = url;
        }
        if (icon_url) {
            this.embed.author.icon_url = icon_url;
        }
        if (proxy_icon_url) {
            this.embed.author.proxy_icon_url = proxy_icon_url;
        }
        return this;
    }
    
    /**
     * Set the footer of the embed.
     * @param {Object} footer - The footer information.
     * @param {string} footer.text - The footer text.
     * @param {string} [footer.icon_url] - The URL of the footer icon.
     * @param {string} [footer.proxy_icon_url] - The proxy URL of the footer icon.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setFooter({ text, icon_url, proxy_icon_url }) {
        this.embed.footer = {};
        this.embed.footer.text = text;
        if (icon_url) {
            this.embed.footer.icon_url = icon_url;
        }
        if (proxy_icon_url) {
            this.embed.footer.proxy_icon_url = proxy_icon_url;
        }
        return this;
    }
    
    /**
     * Set the thumbnail of the embed.
     * @param {Object} thumbnail - The thumbnail information.
     * @param {string} thumbnail.url - The URL of the thumbnail image.
     * @param {string} [thumbnail.proxy_url] - The proxy URL of the thumbnail image.
     * @param {number} [thumbnail.height] - The height of the thumbnail image.
     * @param {number} [thumbnail.width] - The width of the thumbnail image.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setThumbnail({ url, proxy_url, height, width }) {
        this.embed.thumbnail = {};
        this.embed.thumbnail.url = url;
        if (proxy_url) {
            this.embed.thumbnail.proxy_url = proxy_url;
        }
        if (height) {
            this.embed.thumbnail.height = height;
        }
        if (width) {
            this.embed.thumbnail.width = width;
        }
        return this;
    }
    
    /**
     * Set the video of the embed.
     * @param {Object} video - The video information.
     * @param {string} [video.url] - The URL of the video.
     * @param {string} [video.proxy_url] - The proxy URL of the video.
     * @param {number} [video.height] - The height of the video.
     * @param {number} [video.width] - The width of the video.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setVideo({ url, proxy_url, height, width }) {
        this.embed.video = {};
        if (url) {
            this.embed.video.url = url;
        }
        if (proxy_url) {
            this.embed.video.proxy_url = proxy_url;
        }
        if (height) {
            this.embed.video.height = height;
        }
        if (width) {
            this.embed.video.width = width;
        }
        return this;
    }
    
    /**
     * Set the image of the embed.
     * @param {Object} image - The image information.
     * @param {string} image.url - The URL of the image.
     * @param {string} [image.proxy_url] - The proxy URL of the image.
     * @param {number} [image.height] - The height of the image.
     * @param {number} [image.width] - The width of the image.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setImage({ url, proxy_url, height, width }) {
        this.embed.image = {};
        this.embed.image.url = url;
        if (proxy_url) {
            this.embed.image.proxy_url = proxy_url;
        }
        if (height) {
            this.embed.image.height = height;
        }
        if (width) {
            this.embed.image.width = width;
        }
        return this;
    }
    
    /**
     * Set the provider of the embed.
     * @param {Object} provider - The provider information.
     * @param {string} [provider.name] - The provider's name.
     * @param {string} [provider.url] - The URL associated with the provider.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    setProvider({ name, url }) {
        this.embed.provider = {};
        if (name) {
            this.embed.provider.name = name;
        }
        if (url) {
            this.embed.provider.url = url;
        }
        return this;
    }
    
    /**
     * Add a field to the embed.
     * @param {Object} field - The field information.
     * @param {string} field.name - The name of the field.
     * @param {string} field.value - The value of the field.
     * @param {boolean} [field.inline] - Whether the field should be displayed inline.
     * @returns {EmbedBuilder} - The EmbedBuilder instance.
     */
    addField({ name, value, inline }) {
        if (!this.embed.fields) {
            this.embed.fields = [];
        }
        const field = { name, value };
        if (inline) {
            field.inline = inline;
        }
        this.embed.fields.push(field);
        return this;
    }
}