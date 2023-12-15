### This is a Loom video link that shows extension working

https://www.loom.com/share/ab0970906dd14650acd50048b81686b6?sid=8dcc8b99-8239-4846-9562-ea581d5eae2f

## About the challenge process

### What I did

I started by reading the challenge and understanding what was required. Once I had a good understanding of what was required, I took a deep look at the Plasmo documentation, since this is the first time I have used this framework, and I don't really remember when was my last time working with a Chrome extension. Just there I forked the repository and started working on the challenge.

I started by creating the folder structure, some blank files and all the TODOs representing the tasks I had to accomplish.

Then I continued by checking the API connection and implementing the background service worker. It seemed to be easy reeding the documentation so I tried and it worked just fine. I also mocked the API response in order to work faster and comfortable. The use of this mock can be switchable from PLASMO_PUBLIC_USE_MOCK variable in the .env file.

Once I had the API connection working, I started working on the popup. I tried to follow the design principles from Give Freely website and I thought it was a good idea to include the logo.

Then I continue with the rest of the components, starting by understanding the 'contents' folder and how it works. I used several features I found in the documentation examples.

Just to add that I left the commit history in the repository so you can see the process I followed.

### What I didn't do

I didn't have time to implement the tests. I tried to do it by following the documentation example using jest and testing-library, and I reached to to make the environment work. But I found an issue related to the module import syntax and I didn't have time to fix it.

I'm sure I could have done it with a little more time, but in order to follow the challenge time I decided to leave it as it is. Just to say that I would have liked to do it, because it's a part of the process I really enjoy.

### Some nice to have

I believe it would be a good idea to implement the storage handler that the Plasmo framework provides, in order to store the API response and avoid making the API call every time the user opens the popup.

Another think it's not in the challenge but I think it would be a good idea to implement is to show in the notifications modal not one random site and message but the list of occurrences in the current search page. That's why I added the badge to the notification icon, but I realized that the proper way to do it is by using the storage.

Also I would have liked to use some libraries like styled-components or tailwindcss, maybe react-routing for the popup, but I chose to keep it simple and use only the installed dependencies.

#### Thanks for the opportunity and I hope you like it!
