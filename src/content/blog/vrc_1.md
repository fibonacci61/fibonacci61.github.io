---
title: "VRC Part 1"
date: "2025-08-08"
---
## Invitation

December 2023, mid-term season, my mother woke me up with news. She said one of my computer lab teachers called, inviting me to a robotics competition. I was chosen as the very first candidate for the middle school team, for some reason.

At this point in time, I wasn't serious at programming by any means. My journey started in December 2019 with Roblox gamedev. I manage to make about one incomplete game using Lua, and I learned a few other similar languages along the way. I launched a modest (but ugly) website, and some time in 2021, I basically stopped. After that, programming essentially became a seasonal hobby. I still had some skills, but I lost most of the motivation I had during that initial period.

So, I'm guessing that the reason my school picked me was because they saw me hacking at some of the computers, which I don't remember doing, but I digress. The workshop day was scheduled on 2024-01-17. I was incredibly excited! This competition was completely novel to me, I hadn't participated in anything similar ever in my life. I had no clue what it would even be or what the winning criteria. Hell, I didn't even know its name! But eventually, the day came.

## VIQRC

My school took us on a field trip to _Kuwait University_, the hosts of VRC in Kuwait, for the big day. I was joined by five other middle school kids, all significantly shorter than me. I looked more like I was from the high school team. [Email](mailto:phi@fibn.cc) me for proof.

My memory regarding the finer details is fuzzy, but I got my first look into VRC that day. I immediately knew what my role was, and I truthfully informed my teammates that I was going to be the programmer. After the initial presentation by Dr. Noura Aljeri, we moved into a new room where we would start building and programming our bot while an instructor tried explaining what everything was in a very quiet voice. I don't think anyone heard or understood more than 50% of what he said that day.

Afterwards, in preparation, I taught myself the _C programming language_ with the ritual I usually like to take whenever I learn a new langauge: writing a bitmap image parser.

Yep.

I will say that the team, including me, was really terrible. The bot was never once designed by us; we only ever copied those we saw on YouTube or just straight up used the hero bot's build guide. They thought I was a genius after "inventing" arcade drive.

The bot that we went to the national competition on 2024-03-02 (the only competition in Kuwait) with was entirely non-functional. Literally. It was no better than a push bot. And that was exactly how it was used. I believe the only points we ever scored was by pushing over red blocks and parking. And the worst part: my autons didn't work. The worst part is that we completely lost one auton because I configured it to only start after the bot's LED was tapped. I'd left the comp before that round and apparently I'd forgotten to tell them about that.

So, will all that, I don't think it will come as a surprise to you that we ranked in dead last. Despite performing terribly, this reinvigorated my love for programming, and I would start diving much deeper into computer science than I ever did before.

## V5RC

This was the _High Stakes_ season. This year, I graduated middle school and was placed in the high school team. This year, I was focused, and I wasn't going to allow myself to repeat what I did last time.

Reprising my role as programmer, I began preparing the robot's code from 2025-09-05, before the team's first meeting. I developed the philosphy that programming was a trivial task, and that most effort should be spent on designing and driving the robot. With this philosphy, I also believed that other members should have a means of configuring the robot without diving into the code, in case of an emergency where I wasn't available.

This lead me to write a program that could record and store the bot's movements, then play them back later for autons. I named it "Kinesis."

### Kinesis

Kinesis was actually two different domain-specific languages (DSLs): one that could store a robot's configuration, which specified drivetrain motors and other mechanisms, and one that stored recordings as series of controller inputs. The configuration file fulfilled the idea of non-programmers configuring the robot. Despite that, it was never used by anyone other than me. On the other hand, you might have caught a design flaw within the recording format, and that is that it is time-based.

Time-based autons lack precision and are highly-volatile. The robot that recorded the auton must be identical to the bot that plays it. Additionally, I'd just discovered robot odometry. So, I tweaked the format to record points on the field, downloaded a copy of the position tracking paper by _Team 5225A The E-Bots Pilons_, and wrote my implementation of odometry.

Along the road I started porting the program, including Kinesis, from C (yes, base C) into Rust. The reason being that I encountered strange bugs where the bot would abruptly stop functioning altogether, so I blamed it on the programming language and the complexity of the codebase (it was 2k LOC).

However, there was an issue. We were still working with last year's parts exclusively, which I believe were just the basic kit sold by VEX. It's enough to build a hero bot, but certainly not competiton-ready. It also didn't contain any rotation sensors, so my tracking code was completely useless until the parts we ordered arrived. I don't know why, but we weren't ordering directly from VEX; rather, a local supplier in Dubai was distributing parts. I have no idea why this is, especially considering that they were horribly late. Seriously, each week they would promise the arrival of the parts, and each week came another "unexpected delay."

That meant that as long as we didn't have rotation sensors, we would have to still be using time-based Kinesis, and I would have to maintain both time-based and position-based Kinesis simulatenously.

### The Wait

The scrimmage took place on 2024-11-27. The parts hadn't arrived. That means that not only did the robot lack any tracking capabilities, but it was also literally just a slightly modified hero bot! Luckily, most other competitors were in a very similar state. I believe there was only a single team that came with a bot with an intake and a mobile goal clamp, and I kid you not, everyone else either had a hero bot or a push bot. It was just ridiculous.

Meetings slowed down after that. It was mid-term season again, most of the team only wanted to focus on studying, and most importantly, the parts still hadn't come. No worries, I was still being productive: I continued to improve upon the code from the scrimmage and I had also been working on a CAD design of the robot we were going to build once we had the parts we needed. This was being done in the background the entire time.

Finally, on 2024-12-30, after heavily studying the dynamics of the game and the robot meta, the parts were here.

## Departure

I presented my design to the team. Featuring only a drivetrain and a mobile goal clamp, it was incomplete, but I would try to finish it in the future. For now all that we needed to do was build it. Except, we didn't have everything. Namely, we were missed screws long enough for the drivetrain's screw joints. I suggested that we buy some longer screws and continue building tomorrow. But the coach insisted that we hadn't enough time until the competition. Despite my protests, she was adamant. Also, I found a flaw in my CAD design. I used the wrong gear size for some of the drivetrain gears. I said I'd fix it immediately. But my coach with my teammates elected to follow a design published on YouTube. I told them it wouldn't work for various reasons that they didn't seem to even comprehend. So, in that moment, I decided to resign from that team, keeping quiet until the next meeting was scheduled where I revealed my intentions to my coach.

For the next few months I continued to iterate over my robot code. I scrapped the auton-recording idea and got rid of Kinesis. I made a novel design pattern that I eventually scrapped too. I might actually describe it in another post. Then, in May 2025 I started contributing to [vexide](https://vexide.dev) under the name _Fibonacci_, because I just really liked the golden ratio for some reason.

__Note__: It's not because of _Steel Ball Run_. Once again, shoot me an email for proof.

At present, I have no intention of rejoining my old team. Rather, I'm starting my own. So, if you're in VEX too, then I'll see you at Worlds, where I'll hopefully be competing alongside _95900A Rainbots_. Stay tuned!
