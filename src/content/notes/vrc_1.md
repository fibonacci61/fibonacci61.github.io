---
title: "VRC Part 1"
date: "2025-08-08"
updated: "2026-05-11"
tags: ["robotics", "vex", "systems", "personal"]
---
## Invitation

December 2023, mid-term season, my mother woke me up with news. She said one of my computer lab teachers called, inviting me to a robotics competition. I was chosen as the very first candidate for the middle school team, for some reason.

I wasn't serious about programming at that time. My journey started in December 2019 with Roblox gamedev. I managed to make about one incomplete game using Lua, and I learned a few other similar languages along the way. I launched a modest (but ugly) website. As time passed, I started programming less often, until I basically dropped it in 2021. After that, programming became a seasonal hobby. I still had my former skills, but I lost most of the motivation that drove me during that initial period.

I guess the reason my school picked me was because they supposedly saw me "hacking" in the computer labs, which I don't remember doing, but I digress. The workshop day was scheduled on 2024-01-17. This competition was about to be a completely new experience. I had never participated in anything similar in my life. I didn't even know what the winning criteria were other than "build a robot," so my imagination led me to all sorts of crazy hypotheses regarding the competition, whose name I barely remembered. Eventually, the waiting ended and the day arrived.

## VIQRC

My school took us on a field trip to _Kuwait University_, the hosts of VRC in Kuwait. I was joined by five other middle school kids, all significantly shorter than me. I looked more like I was on the high school team.

My memory regarding the finer details is fuzzy, but I got my first look into VRC that day. I immediately knew what my role was, and I truthfully informed my teammates that I was going to be the programmer. After the initial presentation by Dr. Noura Aljeri, all teams were moved into a new room to start building and programming our bots while an instructor tried explaining what everything was in a very quiet voice. I don't think anyone heard or understood more than 30% of what he said that day.

Afterwards, in preparation, I taught myself the _C programming language_ with the ritual I usually follow whenever I learn a new language: writing a bitmap (.bmp) image parser.

I will admit that the entire team, including me, was really terrible. No part of the bot was ever independently designed by us; we only copied mechanisms from YouTube or just straight up used the hero bot's build guide. They called me a genius after "inventing" arcade drive.

The bot that we took to nationals on 2024-03-02 (the only local comp at the time) was entirely dysfunctional. It was no better than a push bot, and that was exactly how it was used. I believe the only points we ever scored was by pushing over large blocks and parking. My autons completely failed too. We even completely lost one auton run because I configured it to only start after the bot's LED was tapped. I had to leave the comp before that run and apparently I'd forgotten to tell my team about the trigger, so it remained completely stationary.

With all that, I don't think it'll come as a surprise to you that we placed dead last. Despite our terrible performance, I had rediscovered my love for programming, so between then and next season, I started diving much deeper into computer science than I ever did before.

## V5RC

This was the _High Stakes_ season. This year, I graduated middle school and was placed in the high school team. I was completely focused now, and I wasn't going to allow myself to repeat what I did last season.

Reprising my role as programmer, I began preparing the robot's code from 2024-09-05, before the team's first meeting. I developed the philosophy that programming should be a trivial part of our team effort, and that most of our time should go towards designing and driving the robot. With this philosophy, I also believed that other members should have a means of configuring the robot without diving into the code, in case of an emergency where I wasn't available.

This led me to write a program that could record and store the bot's movements, then play them back later for autons. I named it "Kinesis."

### Kinesis

Kinesis was actually two different domain-specific languages (DSLs): one that could serialize a robot's _configuration_, which specified drivetrain motors and other mechanisms, and one that stored recordings as series of controller inputs. The configuration file fulfilled the idea of non-programmers configuring the robot. Despite that, it was never used by anyone except me. On the other hand, you might have caught a design flaw within the recording format I just described, and that is that it's necessarily time-based.

Time-based autons are imprecise and volatile. The robot that recorded the auton must be identical to the bot that plays it. Additionally, by the time this version of Kinesis was finished, I had just discovered robot odometry. So, I tweaked the format to record points on the field, downloaded a copy of the position tracking paper by _Team 5225A The E-Bots Pilons_, and wrote my odom implementation.

Before Kinesis was complete, I decided to port the entire program (Kinesis and other stuff) from C into Rust. I did this because I found strange bugs where the bot would abruptly stop functioning altogether. I blamed it on the programming language and the complexity of the codebase (2k LOC), and started the rewrite.

Yet, there was a hardware issue I was neglecting. We were still working with last year's parts, which I believe were just the basic kit sold by VEX. It's enough to build a hero bot, but definitely not competition-ready. That also meant we didn't have any rotation sensors, so my tracking code was useless until the parts we ordered arrived. I don't know why, but we weren't ordering directly from VEX; instead, a local supplier in Dubai was distributing parts. I have no idea why this is, especially considering that they were horrifically late. Each new week came with a promise that our parts would arrive, always shortly followed by an "unexpected delay."

This meant that as long as we didn't have rotation sensors, we would still have to use time-based Kinesis, and I would have to maintain both time-based and position-based Kinesis simultaneously.

### The Wait

The scrimmage took place on 2024-11-27. The parts hadn't arrived. That means that not only did the robot lack any tracking capabilities, but it was also just a slightly modified hero bot. Luckily, most other competitors were in a pretty similar position. I believe there was only a single team that came with a bot with an intake and a mobile goal clamp. Everyone else brought either a hero bot or a push bot. In retrospect, I should have expected that considering the region we were in.

Meetings slowed down after that. It was exam season again, so most of the team only wanted to focus on studying. More importantly, the parts still hadn't come. No worries, I was still being productive: I continued improving the code from the scrimmage, and I'd also been working on a CAD design of the robot we were going to build once we had those parts. This was being done in the background continuously.

Finally, on 2024-12-30, after doing a heavy study session on game dynamics and robot meta in my free time, the parts arrived.

## Departure

I presented my design to the team. Featuring only a drivetrain and a mobile goal clamp, it was incomplete, but I would try to finish it in the future. For now, all that was needed was to build it. Except, we still didn't have everything: in particular, we were missing screws long enough for the drivetrain's screw joints. I suggested that we buy some longer screws and continue building tomorrow, but the coach insisted that we didn't have enough time before nats. Despite my protests, she was adamant. Also, I found a flaw in my CAD design. I used the wrong gear size for some of the drivetrain gears. I said I'd fix it immediately, but my teammates and coach chose to follow a design from YouTube. I told them it wouldn't work for various technical reasons they weren't familiar with. So, in that moment, I decided to resign from the team. I kept quiet until the next meeting was scheduled, then I revealed my intentions to my coach.

For the next few months I continued to iterate over my robot code. I scrapped the auton-recording idea and got rid of Kinesis. I made a new design pattern that I eventually scrapped too. I might actually describe it in another post. Then, in May 2025 I started contributing to [vexide](https://vexide.dev) under the name _Fibonacci_, because I really liked the golden ratio from a thematic standpoint at the time.

__Note__: It's not because of _Steel Ball Run_. [Contact](/about) me if you need proof.

That concludes the first part of this notes series. Additional parts will be added in the future as I gain more VEX material to discuss. Thank you for reading.
