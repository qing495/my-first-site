export default function handler(request, response) {

    // 只允许 POST 请求
    if (request.method !== "POST") {

        return response.status(405).json({
            success: false,
            message: "这个接口只接受 POST 请求"
        });

    }


    // 获取前端发送过来的分数
    const { score } = request.body || {};


    // 检查数据是否正确
    if (typeof score !== "number") {

        return response.status(400).json({
            success: false,
            message: "没有收到有效的分数"
        });

    }


    // 服务器判断是否满足胜利条件
    if (score >= 10) {

        return response.status(200).json({
            success: true,
            message: "服务器确认：挑战完成！",
            score: score,
            serverTime: new Date().toISOString()
        });

    }


    // 分数不足
    return response.status(400).json({
        success: false,
        message: "服务器确认：分数还不足 10 分",
        score: score
    });

}