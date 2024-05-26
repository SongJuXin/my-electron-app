const fs = require('fs');
const path = require('path');

const videoPath ='assets/videos'
// 假定视频文件存放于应用程序的一个子目录中
const videoFolderPath = path.join(__dirname,videoPath);

// 检查目录是否存在，遍历文件
if (fs.existsSync(videoFolderPath)) {
  const files = fs.readdirSync(videoFolderPath);
  
  let videoListHTML = '';
  
  // 过滤mp4文件并创建视频列表
  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.mp4') {
      videoListHTML += `<video class="video-js" data-setup='{ "controls": true, "autoplay": false, "preload": "auto" }'  src="./${videoPath}/${file}" ></video><br/>`;
    }
  });


  
  // 插入视频列表到页面
  document.getElementById('videoList').innerHTML = videoListHTML;



} else {
    console.error(`视频文件夹:${videoFolderPath} 不存在`)
}
