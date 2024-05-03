# introduction-to-typescript

# First download the typscript file globally by

       ## npm install  -g typescript

# Download the nvm for controle the node version

       ## https://github.com/coreybutler/nvm-windows#readme

# For General run of index.ts file

       ## node index.ts

# Created a new tsconfig.json

       ## tsc --init

# Specify the root folder within your source files. It will include main TypeScript file

      ## "rootDir": "./folderName/src/"

# Specify an output folder for all emitted files. It will include javaScript file of TypeScript file

      ## "outDir": "./folderName/dist/"

𝐓𝐲𝐩𝐞𝐬𝐜𝐫𝐢𝐩𝐭 𝐢𝐬 𝐭𝐡𝐞 𝐬𝐮𝐩𝐞𝐫𝐬𝐞𝐭 𝐨𝐟 𝐣𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭 - কি কইসে কিচ্ছু বুঝি নাই বাট শুইন্না ভাল্লাগসে।
ঘটনা টা কি? আশিক দেওয়ানা লোগ জানতে চায়। 🙌
👏 চলেন বুঝি বেপার টা -
প্রথম কথা, javascript হইতেসে প্রচন্ড উদাসী বেখেয়ালি ঘাড়তেড়া একটা প্রোগ্রামিং ল্যাংগুয়েজ। যারে ইংরেজিতে খুব ভাব লইয়া Dynamic programming language কয় আরকি। কিন্তু সে আবার একমাত্র প্রোগ্রামিং ল্যাংগুয়েজ যে কিনা ইন্টারনেট ব্রাউসিং জগতে একটি অত্যন্ত গুরুত্বপূর্ণ স্থান একতরফা ভাবে রাজত্ব করতেসে। শুধু তাই না, browser এর বাইরে node environment এও তার বেশ রাজত্ব। আসলে তারেই উৎসর্গ করে node environment বানানো হইসিলো যেটা পরে কিনা অনেক শক্তিশালী হয়ে ওঠে। অন্য দিকে typescript এর একার নিজের কোনো বেইল নাই বাট বুদ্ধি আছে। typescript চিন্তা করে দেখলো কোনো জায়গার রাজা হইতে হইলে অনেক যুদ্ধ করে কষ্ট করে আরেক রাজা কে পরাজিত করে তারপর রাজা হইতে হয়। typescript ভাবলো আমার আর খাইয়া দাইয়া আর কাম নাই। তখন সে আবার অনেক চিন্তা করে ভেবে ভুবে যুদ্ধ ছাড়া রাজত্ব দখল করার একটা বুদ্ধি বের করে ফেললো। সে প্রচন্ড উদাসী বেখেয়ালি ঘাড়তেড়া রাজা (javascript) কে বিয়ে করে ফেললো। এর ফলে কোনো প্রকার যুদ্ধ ছাড়া এখন রাজত্ব তো সে পেলোই, সাথে নিজের বুদ্ধি গুলাও সংযোগ করে কাজে লাগানোর রাস্তাও পেয়ে গেলো। এখন typescript আড়াল থেকে javascript কে instruction বলে দেয়। আর রাজা javascript কোনো আওয়াজ ছাড়া typescript এর বলে দেয়া কথা তার মতো করে পালন করতে থাকে। আর রাজার(javascript) কথা পালন করতে থাকে সকল browser আর node environment. এভাবেই typescript become the superset of javascript.
(সতর্কতা: don't try this at home)
প্রশ্ন হলো 𝗧𝘆𝗽𝗲𝘀𝗰𝗿𝗶𝗽𝘁 এর কথা 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁 বুঝে কেমনে ?
আপনি যখন typescript এ কোড লিখেন, তখন আপনার লেখা এ কোড মূলত কম্পিউটার বুঝতে পারে না (যেই কারণে বলসিলাম typescript এর বেইল নাই, ও একটা এক্সট্রা কিছু যোগ্যতা সম্পন্ন parasite)। তাই typescript এর কোড কে কম্পিউটার এর বুঝার উপযোগী করার জন্য typescript ওয়ালারা টাইপস্ক্রিপ্ট কোড কম্পাইলার (tsc) নামে একটা কম্পাইলার বানাইসে যার কাজ হলো typescript কোডকে javascript এ রূপান্তর করা। মানে হলো আপনি কোড করবেন typescript এ আর সেই কোড রান হওয়ার সময় কম্পাইল হয়ে javascript এ convert হয়ে যাবে। typescript কোড কম্পাইল হওয়ার পর, একটা javascript ফাইল তৈরি হয়। এই ফাইলে সমস্ত typescript কোড javascript syntax এ রূপান্তরিত হয়ে চুপচাপ বসে থাকে। এখন এই রূপান্তরিত javascript ফাইল টা সহজেই আরামসে browser আর node environment এ চলতে থাকে আর সাথে চলতে থাকে typescript এর রাজত্ব।
𝐈𝐦𝐩𝐥𝐢𝐜𝐢𝐭 𝐝𝐚𝐭𝐚𝐭𝐲𝐩𝐞, 𝐄𝐱𝐩𝐥𝐢𝐜𝐢𝐭 𝐝𝐚𝐭𝐚𝐭𝐲𝐩𝐞 আর 𝐭𝐲𝐩𝐞𝐬𝐜𝐫𝐢𝐩𝐭 𝐢𝐧𝐟𝐞𝐫𝐬 এই তিনটা শব্দ আমরা সম্পূর্ণ কোর্স জুড়ে অনেক বার শুনবো বলে আমার ধারনা।  
বুঝলে বুঝপাতা আর না বুঝলে হতাশা পাতা, মাথা ঘুরা পাতা, ভাল্লাগেনা পাতা, মন খারাপ পাতা, দোষী পাতা..... ইত্যাদি ইত্যাদি ইত্যাদি
👏 চলেন বুঝি বেপারগুলা -
𝗜𝗺𝗽𝗹𝗶𝗰𝗶𝘁 𝗱𝗮𝘁𝗮𝘁𝘆𝗽𝗲 বলতে কি বুঝায় ?
ধরেন, typescript কোড এ আপনি একটা value একটা variable এ assign করলেন কিন্তু কোনো data type উল্লেখ করে দেন নাই, তারপর কোডটি রান করলেন, তখন কোড রান হওয়ার সময় variable এ assign করা value টির data type টাকে typescript স্বয়ংক্রিয়ভাবে নিজে নিজে একা একা নির্ধারণ করে নেয় বা বুঝে নেয়। এই ভাবে যে সমস্ত variable এর ক্ষেত্রে typescript এভাবে স্বয়ংক্রিয়ভাবে নিজে নিজে data type নির্ধারণ করে নেয়, সেই ধরণের variable কে Implicit data type বলে।
𝘾𝙤𝙙𝙚 𝙚𝙭𝙖𝙢𝙥𝙡𝙚:
let name = "Alvi"
// ডেটাটাইপ উল্লেখ না করলে, টাইপস্ক্রিপ্ট এটিকে স্ট্রিং (string) হিসাবে বিবেচনা করে।
𝗘𝘅𝗽𝗹𝗶𝗰𝗶𝘁 𝗱𝗮𝘁𝗮𝘁𝘆𝗽𝗲 বলতে কি বুঝায় ?  
আপনি যখন একটি variable কে declare করে value assign করার সময় value টি কোন ধরণের data type হবে সেটা নির্দিষ্ট করে বলে দেন, তাহলে এটাকে তখন বলা হবে Explicit datatype.
𝘾𝙤𝙙𝙚 𝙚𝙭𝙖𝙢𝙥𝙡𝙚:
let age: number = 38
// এখানে, 'age' ভেরিয়েবলটির জন্য data type হিসাবে 'number' কে explicitly বা স্পষ্টভাবে বলে দেওয়া হইসে।
𝗧𝘆𝗽𝗲𝘀𝗰𝗿𝗶𝗽𝘁 𝗶𝗻𝗳𝗲𝗿𝘀 বলতে কি বুঝায় ?  
বাংলায় infer শব্দের মানে হলো নির্ধারণ করা বা অনুমান করা। এখন typescript code run হওয়ার সময় যদি দেখে code এ একটা variable declare করা আছে কিন্তু data type কি সেটা explicitly বলে দেয়া নাই, তখন typescript নিজে নিজে স্বয়ংক্রিয়ভাবে data type টা নিজে নিজে নির্ধারণ বা অনুমান করে নেয়। এই স্বয়ংক্রিয়ভাবে ডেটা টাইপ টাকে নির্ধারণ বা অনুমান করে নেওয়া কেই Typescript infers বলে। তার মানে হলো implicit data type এর ক্ষেত্রেই typescript infers করে।
আজকের মতো বিদায়।
বাট যাওয়ার আগে দুইটা প্রশ্ন।
প্রশ্ন ১. Implicit datatype ব্যবহার এর অসুবিধা কি ?
প্রশ্ন ২. Explicit datatype ব্যবহার এর সুবিধা কি ?
যদি answer পেয়ে যান তাহলে দয়া করে comment এ দেন। যে answer পায়নাই তার উপকার হবে।
Jahedul Huda Chowdhury (Alvi) 😎

#discussion
আজকে আমরা আলোচনা করব unknown Type নিয়ে, unknown Type কে মূলত রান টাইমে check করা হয়।
উক্ত ফাংশনে প্যারামিটার value কে unknown type হিসেবে সেট করা হয়েছে,
প্রথমে 10 কে Argument হিসেবে পাঠানো হয়েছে। এখানে typeof অপারেটরের মাধ্যমে রান টাইমে চেক করে 10 কে Number হিসেবে পাওয়া গেছে যার ফলে if ব্লকের মধ্যে এন্ট্রি হয়েছে এবং Result এসেছে 1000
পরবর্তীতে “10 kg” কে Argument হিসেবে পাঠানো হয়েছে, এখানে typeof অপারেটরের মাধ্যমে রান টাইমে চেক করে “10 kg” কে String হিসেবে পাওয়া গেছে যার ফলে else if ব্লকের মধ্যে এন্ট্রি হয়েছে, এবং split মেথড ও Array destructuring করে “10 kg” থেকে 10 কে আলাদা করা হয়েছে, যেহেতু এখানে 10 একটি String তাই parseInt() মেথড ব্যবহার করে 10 কে Number এ কনভার্ট করা হয়েছে এবং Result এসেছে 1000
সর্বশেষে null কে Argument হিসেবে পাঠানো হয়েছে, এখানে null কে রান টাইমে চেক করা হয়নি তাই, else ব্লকের মধ্যে এন্ট্রি হয়েছে এবং রেজাল্ট এসেছে “Wrong input”।
type সম্পর্কে sure না থাকলে আমরা unknown ব্যবহার করে থাকি। তবে explicitly টাইপ unknown না বলে দিলে তা any হিসেবে নিয়ে নেয়। এখানে unknown type এবং any type এর মধ্যে ডিফারেন্স হলো unknown type আপনি এখন জানেন না কিন্তু পরবর্তীতে জানবেন এবং এটি হ্যান্ডেল করবেন ৷
যেটা উক্ত ফাংশনে আমরা typeof অপারেটরের মাধ্যমে রান টাইমে হ্যান্ডেল করেছি।
কিন্তু any মানেই হল আপনি বলে দিয়েছেন এটা যেকোন কিছু হতে পারে। যে কোন মানে আমি যা কিছু প্রত্যাশা করতে পারি
অর্থাৎ, আমরা বুঝতে পারলাম unknown Type হলো এমন এক ধরনের Type যা আগে থেকে আমরা জানতে পারি না, রান টাইমে আমরা বুঝতে পারি এটা কোন ধরনের টাইপ।
আমিও আপনাদের মত এই কোর্সের একজন শিক্ষার্থী।
আমি আমার মত করে বলার চেষ্টা করলাম। ভুল-ত্রুটি ক্ষমাসুন্দর দৃষ্টিতে দেখবেন এবং আশা করি শুধরে দিবেন। কোন পরামর্শ থাকলে জানাবেন প্লিজ। ধন্যবাদ সকলকে…

https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/441051145_830566608919521_4877621396131113744_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEa_EqjGMWMpLl3eihtrn9q7RDIaWRd_h3tEMhpZF3-HcXLhEerViJTU2fxiK38KiEhtYFuw0lqjDO9k9bblc6H&_nc_ohc=ks6uDAiPedcQ7kNvgFyY3ka&_nc_ht=scontent.fzyl2-2.fna&oh=00_AfDjpBM2sE3d-zwCNuCTLaBcRJnTehbYu5OYKmQyv2rHUQ&oe=663907A9

## For running the typescript file .ts file into vs code terminal

    https://www.npmjs.com/package/ts-node-dev

## Install npm file for the first time

    npm i -g ts-node-dev

## What is type assertion can you explain it to me?

Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own. Such a situation can occur when you might be porting over code from JavaScript and you may know a more accurate type of the variable than what is currently assigned. It is similar to type casting in other languages like C# and Java. However, unlike C# and Java, there is no runtime effect of type assertion in TypeScript. It is merely a way to let the TypeScript compiler know the type of a variable.
