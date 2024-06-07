import { groq } from "next-sanity";

export const PresonaInformation = groq`*[_type == "PresonaInformation"]{
    _id,
    Name,
    Image,
    "imageURL": Image.asset->url,
    Bio,
    WhatsAppLink,
    TwitterLink,
    discordLink}`;
export const WorkShow = groq`*[_type == "Work"]{
    _id,
    VideoThumbnail,
    "imageURL": VideoThumbnail.asset->url,
    VideoUrlPreview
    }`;
export const Collaborations = groq`*[_type == "Collaborations"]{
    _id,
    ChannelName,
    Image,
    ChannelUrl,
    "imageURL": Image.asset->url
    }`;