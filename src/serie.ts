export class Serie
{
    position: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor( position: number, name: string, channel: string, seasons: number, description: string, link: string, image: string ) 
    {
        this.position = position;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}