//  ユーザー入力に応じたアクションの設定
export const LoginStart =(user) => ({
    type: "LOGIN_START",
});

export const LoginSuccess =(user) => ({ //ログイン成功した際
    type: "LOGIN_SUCCESS",
    payload: user, //状態を返す
});

export const LoginError =(user) => ({
    type: "LOGIN_ERROR",
    payload: error,
});