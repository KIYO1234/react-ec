// ＃ メールのホスト
MAIL_HOST="sv.XXX.xserver.jp"
 
// # SSL（TLS）で送信する場合は465、使用しない場合は587
MAIL_PORT=465
 
// # メールアドレス
MAIL_ADDRESS="hoge@hoge.jp"
 
// # メールアドレス作成時のパスワード
MAIL_PASSWORD="hogehoge"

import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
 
interface IRequest {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;
}
 
const send = (req: IRequest): void => {
    //SMTPサーバ基本情報設定
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT) || 0,  // 数値型にする必要がある
        secure: true, // サーバー接続時のTLS使用
        auth: {
            user: process.env.MAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD
        }
    });
 
    const message = {
        to: process.env.MAIL_ADDRESS,
        from: req.email,
        subject: req.subject,
        html: req.message
    };
 
    // メール送信
    try{
        transporter.sendMail(message, (error, success) => {
            if(error){
                console.log("送信に失敗しました");
                return;
            }        
            console.log("送信に成功しました");
        });
    }catch(e) {
        console.log("送信に失敗しました");
    }
}