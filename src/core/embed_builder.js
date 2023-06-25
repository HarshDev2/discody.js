export class EmbedBuilder {
    constructor(){
        this.embed = {};
    }
    setTitle(title){
        this.embed.title = title;
        return this;
    }
    setDescription(description){
        this.embed.description = description;
        return this;
    }
    setColor(color){
        this.embed.color = color;
        return this;
    }
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