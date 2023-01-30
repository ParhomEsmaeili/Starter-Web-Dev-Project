(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("tilemap",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[55, 55, 55, 55, 55, 55, 55, 5, 55, 55, 55, 5, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55,
            55, 55, 5, 55, 55, 55, 5, 55, 55, 55, 55, 55, 55, 55, 55, 55, 5, 55, 55, 55, 5, 55, 55, 5, 5, 55, 55, 5, 55, 55,
            55, 5, 55, 55, 55, 55, 55, 55, 55, 55, 55, 5, 55, 55, 5, 55, 55, 5, 5, 55, 55, 55, 55, 55, 5, 55, 55, 55, 55, 55,
            55, 55, 55, 55, 5, 55, 55, 55, 55, 5, 55, 55, 55, 5, 55, 55, 55, 55, 5, 55, 55, 55, 55, 55, 55, 5, 55, 55, 55, 5,
            55, 5, 55, 55, 55, 55, 5, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 5, 55, 55, 5, 55, 55, 5, 55, 55, 55,
            55, 5, 5, 55, 55, 55, 5, 55, 55, 55, 55, 5, 55, 55, 55, 5, 55, 5, 5, 55, 55, 55, 55, 55, 55, 5, 5, 5, 55, 55,
            55, 55, 55, 55, 55, 5, 55, 55, 55, 55, 55, 55, 5, 5, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55,
            1, 5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 4, 5, 6, 7, 8, 9, 10, 11, 12, 5, 14, 15, 16,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
            55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 10, 10, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 43, 44, 10, 10, 10, 64, 65, 10, 10, 10, 10, 10, 10, 10, 10, 23, 23,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 92, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
            109, 110, 111, 112, 113, 114, 115, 116, 133, 134, 116, 133, 134, 114, 111, 117, 117, 112, 113, 114, 115, 116, 117, 118, 119, 116, 127, 128, 154, 114,
            127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 138, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 146, 141, 146,
            145, 146, 147, 146, 146, 150, 151, 152, 153, 154, 155, 156, 157, 173, 173, 160, 161, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 148, 149, 160,
            163, 164, 148, 149, 173, 168, 169, 170, 171, 172, 173, 174, 175, 148, 149, 178, 179, 193, 190, 168, 169, 170, 171, 172, 173, 148, 149, 176, 177, 178,
            181, 182, 190, 193, 185, 186, 187, 188, 189, 190, 191, 192, 193, 207, 207, 196, 197, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 208, 209, 196,
            199, 199, 199, 202, 203, 204, 205, 206, 207, 208, 209, 211, 210, 210, 203, 214, 215, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 215, 214,
            217, 217, 217, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199],
         "height":20,
         "id":3,
         "name":"Base Layer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            238, 238, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            238, 238, 238, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245, 245],
         "height":20,
         "id":4,
         "name":"Floor Collision",
         "opacity":0.57,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            238, 238, 0, 0, 0, 0, 235, 235, 0, 0, 0, 0, 235, 235, 0, 235, 235, 0, 0, 0, 235, 235, 0, 0, 0, 0, 235, 235, 0, 238,
            0, 0, 0, 238, 238, 0, 0, 0, 0, 235, 235, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 235, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 238, 0, 0, 0, 238, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 235, 235, 0, 0, 0, 238, 238, 0, 238, 238, 0, 0, 0, 0, 235, 235, 0, 0, 0, 0, 235, 235, 0, 238, 238, 0, 0,
            235, 235, 0, 0, 0, 0, 235, 235, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 235, 235, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147, 147, 147, 0, 238, 238, 0, 0, 0, 0, 0, 0, 0, 0, 238, 238, 0,
            0, 0, 238, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 238, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":6,
         "name":"Platform Collision",
         "opacity":0.41,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"background.tsx"
        }, 
        {
         "firstgid":235,
         "source":"collision.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.9",
 "width":30
});