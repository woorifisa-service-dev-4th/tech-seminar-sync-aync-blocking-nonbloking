function downloadFile(fileName) {
    return new Promise((resolve) => {
        console.log(`${fileName} 다운로드 시작...`);
        setTimeout(() => {
            resolve(`${fileName} 다운로드 완료!`);
        }, 3000); // 3초 동안 다운로드 시뮬레이션
    });
}
async function main() {
    console.log("작업 시작...");
    // 파일 다운로드를 비동기 실행
    downloadFile("file1.txt").then((result) => console.log(result));
    downloadFile("file2.txt").then((result) => console.log(result));
    console.log("다른 작업을 수행 중...");
    console.log("작업 진행 상태를 계속 업데이트합니다...");
}
main();
