# JavaScript-webRTC

## 预备知识点
建议前往[MDN](https://developer.mozilla.org/zh-CN/)详细了解

- [navigator.mediaDevices](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices)
- [navigator.mediaDevices.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)
- [MediaRecorder](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaRecorder)
- [MediaStream](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream)

<br/>

## 视频录制-可下载

```javascript
<!DOCTYPE html>
<html lang="ZH-CN">
<head>
    <meta charset="UTF-8">
    <title>webRTC-视频录制</title>
    <style>
        body {text-align: center;}
        #wlk {width: 400px;height: 300px;border: 1px solid red;}
        #downbtn {display: none;}
    </style>
</head>

<body>
<video src="" id="wlk"></video>
<p>
    <button id="start">开始录制</button>
    <button id="stop">停止录制</button>
</p>
<p>
    <span>提示信息：</span>
    <span id="info">暂未开始录制</span>
</p>
<a href="" download id="downbtn">下载视频</a>

<script>
    const video = document.getElementById("wlk"),
          start = document.getElementById("start"),
          stop = document.getElementById("stop"),
          downBtn = document.getElementById('downbtn'),
          info = document.getElementById('info');
    let recorder, mediaStream;

    start.addEventListener('click', function () {
        info.innerHTML = '即将进行录制';
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then(stream => {
            info.innerHTML = '视频录制中...';
            mediaStream = stream;
            video.srcObject = stream;
            video.play();
            recorder = new MediaRecorder(stream);
            recorder.ondataavailable = e => {
                downBtn.href = URL.createObjectURL(e.data);
            };
            recorder.start();
        })
    });

    stop.addEventListener('click', function () {
        info.innerHTML = '视频录制结束';
        video.pause();
        recorder.stop();
        mediaStream.getTracks().forEach(track => {
            track.stop();
        });
        downBtn.style.display = 'block';
    })
</script>
</body>
</html>

```
<br/>

## 图片拍摄-可上传下载

```javascript
<!DOCTYPE html>
<html lang="ZH-CN">
<head>
    <meta charset="utf-8">
    <title>webRTC-拍照</title>
    <style>
        body {text-align: center;}
        #pic {width: 400px;border: 1px solid red;margin: 0 auto;}
        #downBtn, #upload {display: none;margin: 0 auto;}
    </style>
</head>
<body>
<div id="pic">
    <video id="video" width="400" height="300"></video>
    <canvas id='canvas' width='400' height='300'></canvas>
</div>
<button id='tack' disabled>拍摄照片</button>
<button id="upload">上传文件</button>
<a href="" download="webRTC" id="downBtn">下载图片</a>

<script>
    const video = document.getElementById('video'),
          canvas = document.getElementById('canvas'),
          snap = document.getElementById('tack'),
          downBtn = document.getElementById('downBtn'),
          upload = document.getElementById('upload');

    tack.innerHTML = '准备ing';
    // 打开摄像头
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(stream => {
        tack.innerHTML = '拍摄照片';
        tack.disabled = false;
        video.srcObject = stream;
        video.play();
    });

    //拍摄照片
    snap.addEventListener('click', function () {
        //绘制canvas图形
        canvas.getContext('2d').drawImage(video, 0, 0, 400, 300);
        //把canvas图像转为img图片:base64
        downBtn.href = canvas.toDataURL("image/png");

        downBtn.style.display = 'block';
        upload.style.display = 'block';
    });

    //上传图片
    upload.addEventListener('click', function () {
        /*
        如果接口可接受base64编码的话，直接在这儿调用接口即可。
        如果接口只接受图片就得将base64转换成图片。转换方法网上有很多。
        */
        alert(downBtn.href);
    });
</script>
</body>
</html>
```

