export const CallGpt = async({prompt}) => {
    //fetch(url, json)

    //fetch는 Promise객체를 반환한다.
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
       method: "POST",
       headers: {
        "Content-Type" : "application/json",
        "Authorization" : `Bearer ${process.env.REACT_APP_GPT_API_KEY}`
       },
       body: JSON.stringify({
        "model" : "gpt-3.5-turbo",
        messages: [{
            "role" : "user",
            "content" : prompt
        }],
        "temperature": 1,
        "max_tokens": 1002,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
       }) 
    });

    const responseDate = await response.json();

    const message = responseDate.choices[0].message.content;
    return message;
}