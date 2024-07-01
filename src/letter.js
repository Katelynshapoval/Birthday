import { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Letter({ hide }) {
  // const [hide, setHide] = useState(true);

  const className = `letter ${hide ? "hidden" : undefined}`;
  return (
    <div className={className}>
      <p className="pre-reading">
        Okay it's just so funny. Remember what you made me for 100 days? By that
        time I had the website made, so seeing that you did a very similar thing
        left me speechless lol. I guess we're more similar than we realise,
        that's a new level of twinning.
      </p>

      <ReactAudioPlayer src="love.ogg" controls />
      <div class="notepad">
        <div class="top"></div>
        <div class="paper">
          Hello my dear future wife, <br /> <br />I love you so much that it
          cannot be put into words without making it sound like an
          understatement. You are my first love and I really want you to be my
          last. Every day, every hour and every second I dream of us, of a
          future we both are so desperate for. I want your smile to be the first
          thing I see when I wake up and the last thing I see before I fall
          asleep. Not on the small screen, but in real life. I want to be able
          to hug and kiss you, and I want to be the one to bring that
          breathtaking smile back when you are upset. You are so gorgeous it
          feels unreal. I want you to believe that as much as I do. Your smile,
          eyes, body, and laughter — everything about you is so beautiful.{" "}
          <br /> <br /> I know I am still yet to fully convince you that you
          could never be difficult for me, that I would never hate you, and that
          I fully accept all of you because I love you. I chose you and that
          includes all of your insecurities, overthinking and everything else.
          Let me prove to you that I mean everything I say. I am always there
          for you whenever you need me, regardless of how busy I am, my girl is
          the priority. <br /> <br /> Unfortunately, I cannot give you a
          birthday kiss, but that is what I am imagining right now. Just the
          thought of it makes me smile, and it is not October yet. I told you
          this many times before, but still. No matter how difficult it is to go
          through long distance or how hard it might get, I am ready for
          anything for you because you are worth every second of it. No ups and
          downs can ruin it, because we won’t let them. <br /> <br /> You know I
          am looking at you right now. Like, at the moment of writing this. How
          can you possibly be this gorgeous? Unbelievable. My pretty girl, a
          dream come true. <br /> <br />I love you so much
        </div>
      </div>
      <p id="context">
        For the context: I wanted to film short videos of me randomly talking
        about you, but then I realised that the video would end up lasting more
        than an hour so I stopped. Still, I think you'd love to see what I had
        anyway.
      </p>
    </div>
  );
}
