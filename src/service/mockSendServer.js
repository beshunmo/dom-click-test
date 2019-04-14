export function mockSendServer(login, pass) {
  if (login === "123@mail.ru" && pass === "123456") {
    console.log('HEY!!!!')
    return {
      authorized: true,
      message: "Hi Admin!!!"
    }
  }
  return {
    authorized: false,
    message: 'OPPS!'
  }
}