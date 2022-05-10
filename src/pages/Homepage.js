import React from 'react';

// Page Components
import Slider from '../components/Slider';
import Button from '../components/Button';

// Datas
import { SliderData } from '../Data/SliderData';

// Style
import styled from 'styled-components';

// Logos
import { primary, saturatedRed } from '../Utility/Colors';

const Homepage = () => {
  return (
    <StyledPage>
      <div className='section'>
        <Slider
          slidesPerView={1}
          spaceBetween={50}
          loop={false}
          simulateTouch={true}
          grabCursor={true}
          speed={500}
          mousewheel={false}
          keyboardEnabled={true}
          keyboardOnlyInViewport={true}
          paginationEl={'.swiper-pagination'}
          paginationType={'progressbar'}
          navigationNextEl={'.swiper-button-next'}
          navigationPrevEl={'.swiper-button-prev'}
          autoplayDelay={3000}
          autoplayDisableOnInteraction={false}
          autoplayPauseOnMouseEnter={true}
          b1={1}
          b2={1}
          b3={1}
          items={SliderData.map((item, index) => {
            return (
              <>
                <img className='mobileImg' src={item.imageMobile} alt='' />
                <img className='desktopImg' src={item.image} alt='' />
                <div className='description-container'>
                  <div className='text'>
                    <h2 className='title'>{item.title}</h2>
                    <p className='description paragraph'>{item.description}</p>
                    <div className='buttons'>
                      <Button setClassName={'button'}>VISIT</Button>
                      <Button setClassName={'button2 button'}>
                        LEARN MORE
                      </Button>
                    </div>
                  </div>
                </div>
                <div className='overlay'></div>
              </>
            );
          })}
        ></Slider>
      </div>

      <h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam porro
        dolorem accusantium, iure architecto aperiam eos placeat tenetur
        asperiores. Aliquid, ipsum officiis soluta commodi quas nobis
        consectetur suscipit saepe ex. Harum eum voluptatem similique aperiam
        molestiae, veniam laboriosam commodi in veritatis nemo soluta officia!
        Dicta ea debitis alias eaque temporibus numquam officiis saepe qui, nemo
        perferendis repellat quos, quisquam minima! Commodi dignissimos quisquam
        quasi earum neque eligendi delectus excepturi, numquam rem, dolorum
        libero repellendus id hic, in quia officia ab omnis sapiente! Autem,
        doloribus ipsum alias tenetur ab impedit sequi? Quos, dolores cupiditate
        magnam sequi natus, repellat dignissimos illo accusamus eius ex, soluta
        necessitatibus consequatur voluptates corporis laborum itaque vel ipsum?
        Repudiandae ipsam minima cupiditate repellendus error tempora quae
        delectus? Nulla vel fugit fuga exercitationem et reiciendis officiis
        labore deserunt repellat veniam magni, dicta recusandae ullam animi
        molestiae. Unde earum necessitatibus facilis quam fugit dignissimos,
        voluptatum cum iusto libero quos. Dolorum perspiciatis ipsam nulla?
        Praesentium, quas nulla earum, cumque iusto, aperiam cupiditate
        recusandae deleniti at odit magnam obcaecati. Quo aperiam quisquam alias
        accusantium aliquid eaque voluptatum optio unde sapiente ipsa. Ab
        voluptas, soluta error explicabo veniam corporis inventore accusamus nam
        iure expedita rem perferendis sint doloremque, consectetur voluptatem
        necessitatibus dolore, iusto excepturi suscipit. Quidem, nisi earum.
        Recusandae rerum accusamus doloribus. Corporis provident error laborum
        tempore, modi rem! Non rerum ex animi nobis commodi reiciendis, porro
        cupiditate, iure saepe molestiae exercitationem minima sit harum
        corporis? Voluptas dolor debitis perspiciatis ut praesentium. Enim
        voluptas, aliquid reiciendis possimus sed nihil eveniet suscipit
        assumenda nesciunt ipsam libero deleniti, molestias numquam recusandae,
        magni minima labore! Iusto nemo architecto aspernatur aliquam quidem
        quam non autem aut? Impedit nisi cupiditate quod tenetur ad, quaerat
        officiis consequatur earum, ipsa nulla a velit cumque esse? Animi
        recusandae aut, voluptatum voluptate, consequatur saepe, rem consectetur
        debitis soluta ducimus temporibus maiores? Commodi accusantium amet,
        vero officiis quidem natus perspiciatis enim tempore? Perferendis
        dignissimos quibusdam eligendi aperiam officia debitis numquam cumque
        deleniti impedit ea iusto omnis, cupiditate quos est voluptas atque
        beatae! Nam quidem exercitationem aspernatur vel facere corrupti qui,
        possimus, ullam totam sequi tempore sapiente tenetur officiis quia
        vitae. Dolorem amet soluta officiis facilis similique ducimus
        consequuntur? Consequuntur in pariatur eius. Excepturi cumque earum
        ratione officiis quidem saepe distinctio neque? Expedita asperiores,
        quibusdam nulla veniam sequi provident dolorum cum et aliquid! Maiores
        omnis quisquam aliquam eos laboriosam unde accusamus doloremque
        expedita? Dicta consectetur ipsam repellendus quisquam eos quis
        eligendi. Expedita atque corporis culpa laboriosam aut, inventore
        commodi, veritatis est, qui error neque deleniti adipisci laudantium
        voluptas. Debitis sint excepturi quo dolor. Eum quo nam neque dolor, vel
        et, vitae debitis dolores delectus voluptatibus ipsam earum officia ex
        in maxime corrupti cum suscipit illo ad. Quia iste omnis facilis
        expedita reiciendis ad? Illum nisi fugit quia? Odit itaque quae placeat
        voluptate ullam atque sit magni aperiam autem soluta iste laboriosam
        eius harum possimus minima est expedita recusandae, ad id consectetur
        laudantium asperiores? Quaerat modi facilis sapiente. Ipsa assumenda cum
        perspiciatis nesciunt aut adipisci delectus, earum laborum consectetur
        culpa, totam, iure est! Fugiat doloremque dolor accusantium et corporis
        facere dolorum fuga possimus assumenda! Placeat perspiciatis laudantium
        culpa architecto ipsam animi, facere nostrum labore, ullam optio
        cupiditate debitis quibusdam voluptates aliquam neque repellendus,
        perferendis deserunt? A ipsa laboriosam ad labore voluptate sed magnam
        tempore! Incidunt ipsam tempora inventore, architecto aut eius dolore
        cupiditate cum debitis, officiis laborum ex nisi consectetur quas nam.
        Dolorem magnam soluta doloribus eligendi explicabo qui expedita
        recusandae quod eos iusto. Voluptatem aliquam quas quidem tenetur unde
        quisquam assumenda? Ex veniam animi repellat dolorem eveniet amet ea,
        aspernatur nostrum tempore soluta aliquam sint! Hic at explicabo error
        magni id maiores laboriosam. Atque ipsa cum rerum error nam repellat!
        Incidunt aut ducimus amet officiis ad, voluptate porro voluptatibus
        magnam? Quis quas ipsa deleniti, voluptate exercitationem voluptatum,
        sit suscipit culpa omnis, ad quasi? Voluptatem aut quidem maiores odio
        iste natus debitis nemo illum inventore recusandae mollitia delectus,
        odit eos reiciendis error fuga dolorum, vel sapiente nobis blanditiis
        quae! Quos officiis exercitationem corrupti quas. Deleniti nesciunt
        perspiciatis, quas corporis fugiat doloremque aliquid laborum laboriosam
        recusandae! Hic modi sequi ex, atque minima dicta aliquam, expedita
        excepturi autem molestias quibusdam aspernatur voluptatum iusto. Harum,
        aperiam commodi! Aspernatur sint quo in praesentium, dicta voluptatem
        eius magni qui culpa ab voluptas, beatae, a maxime nulla similique
        reiciendis voluptate quos autem perspiciatis. Sunt temporibus iusto quis
        aliquid voluptatum velit! Provident molestiae velit soluta consequatur
        ea itaque iure vitae unde laborum debitis accusamus ratione, ullam nobis
        saepe deleniti accusantium quia ab ipsam hic laudantium explicabo odit
        praesentium? Culpa, ipsam a! Aliquam voluptate totam optio? Placeat
        cumque eos voluptatum asperiores ipsam, nam excepturi ut minima,
        consequuntur alias rerum suscipit tempora sapiente. Excepturi beatae
        aliquid repellat et soluta. Voluptas consectetur odit deserunt! Sit
        obcaecati, sunt commodi quae veniam dolor minus itaque accusantium enim
        in ex officia voluptatibus qui cumque. Nesciunt ipsa quibusdam ratione
        commodi, nobis quo dolores facilis id similique deserunt nemo. Libero
        obcaecati inventore asperiores quam laboriosam quibusdam molestias dicta
        perspiciatis cupiditate debitis laborum fuga quidem culpa magni nesciunt
        exercitationem architecto corrupti quas explicabo, voluptas ratione
        omnis facilis? Eius, reprehenderit eveniet. Id, omnis eum quas at quidem
        corporis doloribus vero libero magni amet quisquam! Similique et dicta,
        harum iste dolorem commodi sequi recusandae? Dignissimos quia corporis
        consequuntur maxime recusandae repellat magnam? Veniam, repellat illo
        possimus iusto earum, aperiam explicabo in eum ullam cumque, voluptatem
        quis eos vero ratione dolor necessitatibus officiis error. Aspernatur
        aliquam cum iure dignissimos nulla! Nisi, quaerat saepe. Illum excepturi
        nulla dolores voluptatum provident fugit ab nihil, quam aliquid repellat
        nam minus sint corporis enim in sunt modi repudiandae ipsam non
        perspiciatis adipisci ducimus officiis ipsum animi! Nobis? Impedit ipsam
        incidunt a alias est velit vel eveniet itaque, ducimus consequuntur
        voluptatem aperiam aliquam nostrum consequatur tempora ratione sit atque
        dolore cum voluptatum dignissimos? Possimus magnam fuga recusandae
        nobis? Blanditiis esse amet suscipit eaque dolores iusto ipsa natus
        ducimus in necessitatibus magnam id iure quod veniam nulla corporis
        doloribus quasi voluptates, ullam est voluptatem ea nam totam dolor.
        Voluptatibus. Ea, sed quidem? Beatae error deleniti architecto ut veniam
        similique soluta, aperiam quas delectus asperiores explicabo vel cum hic
        provident odio aut, temporibus voluptatem quis. Ipsa recusandae dolore
        nam voluptatem? Dicta quaerat veniam facere nulla rem fuga nostrum id,
        voluptate ratione ut facilis excepturi officia optio blanditiis autem,
        reprehenderit unde modi aliquid assumenda voluptatum ad alias nam vel
        magni! Recusandae! Molestiae ea enim voluptatum qui obcaecati. Impedit
        quis eaque ipsam animi aliquam, dolor consectetur suscipit voluptas,
        dolorum quibusdam eum ullam ratione nulla libero quasi optio nihil
        fugiat earum porro expedita. Inventore a laborum nemo quasi natus, ex
        eum laboriosam odio sed asperiores eligendi et pariatur eveniet! Labore
        et laboriosam laudantium, id sunt dolore perspiciatis ducimus, provident
        laborum ipsa tempore praesentium. Ut officiis excepturi animi fugiat
        suscipit magni laborum quibusdam. Nobis voluptatibus incidunt iure
        ratione dolorum sapiente est ab numquam officia, sed, excepturi aliquid
        quas ducimus commodi illum dolor. Quam, laboriosam. Possimus incidunt
        expedita quam quidem vel ipsam, fugit quisquam dolores quia? Error id
        nulla quod quo, ad distinctio quidem, minima in dolorum itaque ab
        officiis ea earum hic esse aperiam. Sint eius quod odit modi. Qui sint
        animi quasi molestias voluptatum tenetur sapiente adipisci praesentium,
        neque iste provident facilis soluta delectus architecto enim modi
        deleniti est et officiis dolore maiores. Non adipisci ipsam voluptatum
        magni dolore nesciunt atque quam animi voluptas mollitia autem
        accusantium odio laudantium et, quidem neque provident enim odit, ad
        recusandae sapiente repudiandae! Aut quos suscipit est. Illum, alias, id
        ex, rem laboriosam totam temporibus natus iste voluptas adipisci nam
        fuga. Aliquid voluptatibus officiis error earum atque ex voluptatum
        officia obcaecati nobis soluta fuga, unde rem rerum! Ratione reiciendis
        repellat tenetur voluptates placeat omnis itaque in adipisci sapiente
        atque iusto harum quo eligendi aliquid, quam saepe culpa a impedit
        laudantium repellendus vitae nisi? Voluptas iure reprehenderit odio!
        Laborum mollitia neque unde odio vitae atque esse, quisquam expedita
        doloremque consequatur, incidunt blanditiis sint sunt est, molestias
        officia tenetur. Optio illum ex consequatur nulla, molestiae aperiam
        sint quidem. Obcaecati. Consectetur reprehenderit eos quo, sequi hic
        asperiores molestiae. Ipsam accusamus nam maxime mollitia, nesciunt,
        quasi quos, molestias iusto expedita et iure ipsum inventore neque amet.
        Laboriosam praesentium aut consequatur sequi? Minus qui nulla ea?
        Placeat expedita blanditiis debitis magnam iure minima fugiat, vel,
        illum dolor nostrum voluptas? Reprehenderit at iure excepturi ipsum
        voluptatem accusantium veritatis facere cum. Qui, totam deserunt. Amet
        possimus ex illum reiciendis. Dolores officia natus sapiente cupiditate
        corrupti voluptates tempore qui, assumenda ea doloremque ratione
        molestias blanditiis veniam quod? Nulla accusamus natus alias
        repellendus qui cumque laudantium. Dicta praesentium aliquam similique
        nulla eaque? Itaque magni animi sit adipisci voluptatum at voluptatibus
        magnam sed rem, aspernatur commodi dignissimos quibusdam quasi aperiam,
        est aliquid officia doloribus reiciendis neque praesentium. Assumenda
        provident commodi maxime voluptatem, ab consectetur reprehenderit optio
        ullam reiciendis illum ipsa cum fuga quia doloribus soluta error aliquid
        dicta accusamus tempore maiores, minima eum nesciunt. Hic, libero ab?
        Consequatur earum animi quo nam assumenda quidem similique laboriosam
        velit, minus eum, enim atque fuga. Earum eaque ab, esse iusto, ex amet
        omnis vero aperiam consectetur repellat incidunt! Atque, ut? Voluptas
        illo neque perspiciatis velit fuga? Aspernatur dolores soluta repellat
        repellendus ab voluptatibus ducimus deserunt, est, ea, quam quis
        provident quos adipisci voluptas eum exercitationem ipsam sit impedit
        doloribus consequatur! Officia facilis nobis quisquam quae deleniti.
        Reprehenderit soluta exercitationem, distinctio tempore aliquam possimus
        dolorum id quod. Eius repudiandae molestiae in! Dolor iste commodi
        inventore magnam eaque nulla impedit non dolores. Ea deserunt labore
        voluptates iure ratione tempore voluptatum impedit voluptatem molestias
        excepturi. Exercitationem ea iure consequuntur iusto blanditiis earum
        illum, aliquam ut aliquid est corporis aspernatur vitae dolor, porro
        temporibus? Illo saepe fugiat eveniet tempora ducimus tempore odit nihil
        facilis. Exercitationem ducimus quasi, inventore cumque distinctio,
        temporibus quis aut quo ab dolorum neque facilis porro soluta hic
        excepturi iure illo! Quo sit quae voluptas, nisi deserunt veniam!
        Quibusdam inventore voluptates eos perferendis at nisi voluptatem harum
        doloremque exercitationem, nesciunt obcaecati unde saepe corrupti id
        assumenda rerum deserunt ullam suscipit provident. Iusto praesentium eos
        amet sint quod esse quibusdam minima voluptatibus, molestias,
        reprehenderit quas? Ipsam, quia? Alias obcaecati quo, distinctio
        eligendi iste quasi facere ea quod harum omnis perferendis. Assumenda,
        dicta? Voluptatibus aperiam explicabo quam labore modi! Minima vero
        officiis expedita distinctio fuga aspernatur nisi error atque porro
        odit! Necessitatibus vitae accusantium aliquam inventore alias earum
        excepturi atque eius aliquid ad. Officiis officia provident quidem
        placeat laudantium! Ut nam accusamus magni dignissimos quo omnis itaque
        deserunt dolor nobis numquam iste quia fuga enim cumque mollitia
        voluptate voluptatem culpa, architecto sit earum! Dicta, dolor non.
        Necessitatibus quis, dicta at quod ullam nostrum odio possimus dolor.
        Non similique quos illum assumenda harum nesciunt doloribus ipsum.
        Exercitationem fuga quod ad animi accusamus provident voluptatem. Iure
        quis ipsam qui cumque tempore tenetur, facilis illo nam debitis
        reiciendis sequi, modi autem impedit laudantium illum molestiae
        praesentium quaerat maiores possimus commodi id dicta dignissimos.
        Saepe, reiciendis earum. Obcaecati amet sint libero, nam id tempore
        veritatis incidunt, laudantium, fuga provident temporibus accusantium
        earum molestias odio atque blanditiis? Eum asperiores unde atque tempore
        quisquam odio quae minima facilis nisi? Aliquam cumque sed, autem,
        expedita quo molestias odio delectus sequi facere, saepe optio dicta?
        Autem aperiam ducimus reprehenderit ratione blanditiis nam placeat
        perspiciatis similique eum. Adipisci quidem animi asperiores facilis!
        Consequuntur cupiditate dignissimos excepturi deserunt nesciunt saepe
        ipsum voluptas odit possimus deleniti reprehenderit, voluptates
        consequatur quaerat asperiores vitae commodi! Totam ratione alias rerum
        quisquam. Eius reprehenderit adipisci nulla deleniti porro. Recusandae
        tempora impedit totam laboriosam veritatis officia voluptatem deleniti!
        Perferendis omnis unde optio! Minus consectetur facere ea cum omnis, eum
        maxime voluptas nostrum sapiente hic culpa laudantium reprehenderit
        veritatis eius. Amet asperiores cum magni nostrum voluptate obcaecati
        molestias enim, iusto omnis laudantium! Possimus eaque corporis quasi
        voluptatum ipsa culpa cumque quisquam quas saepe, placeat tempora. Sit
        quaerat ducimus illum optio! Laudantium, labore doloremque autem libero
        explicabo voluptatum dolorem quis alias ex cupiditate illo vitae
        incidunt similique dolorum eum a? Magnam quidem molestiae blanditiis
        inventore corporis nam cumque. Voluptate, dicta alias. Nostrum eveniet
        perferendis molestias dolor, ea nihil optio ratione hic esse explicabo,
        quibusdam quas numquam reiciendis soluta. Perspiciatis impedit, vel
        tempore natus sint quas velit voluptates rem quod architecto dolor! Sunt
        quaerat dicta excepturi dolore officia odit iusto, qui accusamus nihil
        sit neque quae tenetur nam dolores minus iure adipisci reiciendis saepe
        ipsum asperiores. Consectetur, mollitia. Perspiciatis molestias porro
        ipsa. Laboriosam quo repudiandae mollitia voluptatum fugiat ex, eos
        tempora id debitis. Beatae accusamus id esse obcaecati sunt dignissimos.
        Sapiente nam illum odit quia totam possimus quisquam porro ducimus
        repudiandae expedita! Fugit molestiae dignissimos officia ducimus
        quidem, ipsa tempore sunt impedit nisi aliquam deserunt facilis dolor
        molestias nulla. Vero reiciendis, quis et magnam rem, iste id tenetur
        laudantium soluta sapiente autem! Rem eaque laudantium modi enim quas
        itaque eius necessitatibus unde odit vitae, ullam autem veniam tempore
        ipsam fugit! Tempora quibusdam quis obcaecati harum tenetur repudiandae
        reprehenderit, dolores dicta cumque cupiditate. Sunt dolor modi
        explicabo voluptates voluptatem dignissimos. Cum distinctio amet odio
        odit vel nostrum ab qui? Vero quis assumenda veritatis fugit ad totam
        quae unde illo deleniti! Earum, distinctio mollitia? Sequi ducimus, hic
        minus quisquam in tempore sunt explicabo? Hic explicabo delectus est
        nobis perspiciatis natus ipsa! Consequatur harum blanditiis sint porro
        quam, aperiam quibusdam repudiandae dignissimos reprehenderit in libero.
        Cupiditate voluptatem libero ipsa ex vero, voluptas quis ullam, commodi
        cumque at illo reprehenderit est sit nisi, quaerat possimus expedita?
        Eaque expedita aliquam assumenda laudantium. Nostrum sequi omnis
        voluptate suscipit. Repellendus alias recusandae delectus fugiat ullam,
        nobis quae accusamus, dolorum beatae debitis, officiis eligendi libero
        cumque nemo ratione corporis aspernatur. Aut sit nisi laboriosam
        accusamus nemo doloremque quasi iusto error! Deleniti aliquid numquam
        consequatur. Maiores molestiae cupiditate ut accusamus numquam, iste
        vitae. Consequuntur maiores soluta aliquam ut omnis consectetur tempora
        dolor culpa, sapiente quasi. Qui earum impedit itaque alias iure. Non
        sit est ipsam porro veniam maxime. Quod minus minima accusantium veniam,
        aliquid, debitis maxime magni reprehenderit, non inventore dolorum
        similique animi maiores incidunt? Atque dolor officia laudantium
        veritatis ducimus. Ad, iste. Aliquam quasi laboriosam eos modi. Totam
        error officiis esse, alias, modi magni cumque voluptatem facilis
        blanditiis id odio rem cum itaque laboriosam vitae quos laborum unde ut.
        Praesentium. At commodi delectus temporibus fugit excepturi suscipit
        ipsa? Quod culpa corporis animi itaque fugit numquam, officiis neque
        voluptates incidunt deleniti obcaecati earum mollitia maiores ipsum
        consectetur! Dolorum nisi modi numquam! Cum illo reiciendis, consequatur
        aliquid commodi officiis cumque ratione amet, delectus unde, laudantium
        iste sequi. Earum placeat labore quae, quaerat molestias esse? Pariatur
        ratione fuga nisi laudantium et repellendus deleniti! Veritatis soluta
        non ex repellat aliquid similique nulla quia iste dolor laboriosam
        tempora quos doloremque sequi cupiditate in natus pariatur quo dolorum,
        minus eligendi! Nesciunt quod non eveniet cum mollitia. Nulla voluptates
        quibusdam, tenetur amet aspernatur hic culpa quam natus commodi vitae
        aliquam odio iure assumenda facere dicta, eos officia nemo ea, nisi
        delectus veritatis ipsam? Nostrum iusto similique quo. Ipsa suscipit
        aliquid magni blanditiis assumenda deserunt fugit accusantium voluptate
        rem dolor id deleniti saepe, odio labore modi molestias! Voluptates
        consequatur ab odio, ea totam nemo explicabo error reprehenderit
        excepturi. Magni doloribus placeat temporibus perferendis quas maxime
        facere harum nemo nostrum voluptate vero blanditiis sapiente nihil
        tempora, recusandae voluptatibus, vel voluptates error earum dolor
        corporis unde ullam similique accusantium! Doloremque! Modi voluptatem,
        quia totam, repudiandae hic inventore temporibus ipsam cupiditate, id
        mollitia explicabo assumenda culpa esse ducimus incidunt maiores quam
        atque voluptates delectus earum voluptate! Ullam assumenda eligendi
        adipisci autem. Ipsam et nemo neque quidem nesciunt quos nobis aliquid
        consectetur, pariatur eos illo placeat eligendi reprehenderit quo harum
        iste fuga cum illum dolores ducimus soluta consequatur aperiam!
        Consectetur, a? Id. Sint ex iure similique deleniti, ipsum sequi, a
        voluptatum rem laboriosam voluptatem officia accusantium. Accusamus rem
        aliquid sunt quibusdam, molestiae quae soluta? Provident rem voluptas
        officiis eum excepturi voluptatibus nesciunt! Doloribus, adipisci
        inventore quaerat modi iste quasi illum laudantium dolorem omnis?
        Voluptatibus nam assumenda tempora numquam ex. Dolor at aliquid amet
        eligendi ratione velit, sapiente sunt autem modi. Est, itaque? Beatae
        quaerat repellendus assumenda hic saepe nulla nesciunt totam, quia
        dolorum. Laboriosam eius laudantium consectetur vero culpa quia nam, ab
        maiores libero necessitatibus esse provident itaque! Aut, accusantium
        ratione. Sequi. Nulla tempora illo quo eligendi et quod, ea explicabo
        dolorem ratione! Dolores a voluptates voluptas neque fuga beatae nostrum
        cum ullam ex fugit voluptatibus itaque ducimus, sapiente repellendus
        odit quo. Possimus tenetur tempora quo obcaecati illum culpa magnam
        explicabo nemo perspiciatis dicta, animi minus in amet a similique
        adipisci odio fuga quaerat autem ratione vero aliquam, numquam ab vel?
        Optio? Culpa iure quibusdam officiis asperiores tenetur corporis
        corrupti fuga praesentium hic? Voluptates eaque quo sequi labore placeat
        sunt at mollitia velit architecto accusamus assumenda, harum tempore ab!
        Neque, delectus voluptatum! Quisquam nobis numquam eligendi ipsum
        similique a architecto ducimus, deserunt animi, voluptatum quos
        accusantium explicabo porro. Quibusdam, porro magni voluptatibus beatae
        voluptatem adipisci nemo tempore at incidunt recusandae necessitatibus
        quis? Aliquam, natus ratione voluptatem magni repudiandae nulla laborum
        iure, hic ipsum suscipit architecto assumenda corporis. Aspernatur
        corrupti quod cumque, maxime cupiditate molestiae incidunt assumenda
        nemo quae architecto quidem expedita veniam. Cum, vel ducimus beatae,
        obcaecati vitae corporis blanditiis, quas saepe odit est sit architecto
        quaerat dolore laborum! Magnam aut quisquam quae cumque est sit a
        consequuntur, unde adipisci. Adipisci, harum? Id accusantium ullam, quas
        saepe exercitationem dicta et rerum non aliquid nisi ducimus obcaecati
        ut odio excepturi incidunt voluptatibus quis dolor laboriosam nemo ipsum
        placeat beatae iure sunt. Illum, atque. Quidem nam, consequuntur rem
        officia ea praesentium laborum earum natus distinctio pariatur ipsa et
        qui quisquam reprehenderit voluptate expedita quia fugiat assumenda
        ullam accusamus impedit molestiae odio. Similique, nisi exercitationem.
        Iste, necessitatibus iure minima nulla at enim facilis molestiae nobis
        reprehenderit veniam, ullam dolore incidunt laborum fugit velit
        quibusdam ut, corrupti tempora vel quisquam dicta eaque obcaecati? Sed,
        optio earum. Minima earum aliquid, natus, eaque dignissimos sint beatae
        eligendi maxime harum, sapiente excepturi. Ab est, quam exercitationem
        harum obcaecati maiores commodi alias iure nam quod. Esse sequi
        voluptatem quos aspernatur. Sed ad delectus inventore voluptates. Minus
        itaque quod ad nisi delectus mollitia maxime illum nemo et dolore.
        Explicabo enim nisi quam suscipit deserunt aspernatur numquam architecto
        illo! Qui, eos voluptas! Impedit iusto laboriosam modi quod numquam?
        Excepturi quas iste itaque non totam. Nihil ab obcaecati minus commodi
        deleniti quis asperiores voluptate cum a repellendus sed vitae, qui
        veritatis est? Officiis. Architecto, iste perferendis ipsa ducimus, quam
        esse aliquid fuga libero commodi tempore ipsum, modi et magnam? Quam
        libero suscipit minima vel, voluptates consequuntur error, sint
        repudiandae nisi ea natus sequi. Numquam consequuntur, excepturi fuga
        sit deserunt nisi tempora architecto molestiae aliquam doloribus quasi
        mollitia accusantium totam commodi dolores, accusamus quia labore
        voluptate. Error doloribus voluptates quae culpa ad! Cupiditate,
        similique. Cupiditate adipisci earum suscipit recusandae, repellat
        quisquam asperiores tempora accusantium iste officia voluptatum minima
        eum est explicabo in consequuntur perspiciatis eos molestias laudantium
        odit consequatur quasi incidunt! Ipsa, dolores voluptatem. Temporibus
        enim molestiae laudantium neque amet explicabo similique recusandae
        aliquam ad. Aperiam quia incidunt ipsa repellendus fugit, quis
        laudantium odit laboriosam quod doloribus optio rerum minima, assumenda
        nobis voluptates? Tempora. Quidem, nulla! Minus est nisi impedit quo
        quidem eius maxime illo ab, quis voluptas autem similique velit
        veritatis eos adipisci repellat ullam. Debitis, quaerat soluta! Totam
        culpa expedita veritatis eligendi? Ab, ratione minima quas excepturi,
        asperiores natus perspiciatis recusandae atque deserunt delectus id
        tenetur itaque nihil magnam. Inventore quam necessitatibus ex! Saepe
        alias vitae quibusdam obcaecati. Libero error quis fugit. Aut, sunt,
        repellat id nam dolores maxime similique ipsa minima nulla asperiores
        doloribus. Iusto quos dolore dolores harum quia voluptatibus? Quo
        pariatur facere voluptas cum nam? Provident dolores aliquid sint!
        Blanditiis laudantium, aperiam distinctio ratione repellat
        necessitatibus facere reprehenderit unde aut esse nostrum nihil
        voluptatum commodi, illum tenetur officiis praesentium, deserunt quo
        dolores sed consectetur velit cum consequatur. Praesentium, dicta.
        Libero totam expedita deserunt quae dignissimos amet omnis possimus?
        Deleniti sapiente dolorum magnam voluptatem hic minima nam tempora in
        culpa voluptatibus vel aliquid dignissimos ipsa soluta, aliquam est?
        Enim, pariatur. Dolorem porro molestiae esse alias est sed possimus
        dolores aliquam libero debitis qui illum iusto inventore dolor
        doloremque, accusamus eaque consectetur distinctio, natus nisi ad fugiat
        ratione. Qui, totam quisquam. Quisquam iure debitis officiis quod
        repellat perferendis voluptatum minus repudiandae, nesciunt, numquam eum
        sequi. Quisquam expedita, rerum nemo suscipit, aliquid, dolor nihil ad
        exercitationem voluptatum officiis soluta ducimus praesentium ullam!
        Eligendi, tenetur deleniti ut eum minima sit atque voluptatibus
        accusantium, officia ab magnam maxime. Error minus culpa ipsa illo in
        impedit molestias, modi quod quas nobis velit. Architecto, laudantium
        dignissimos. Atque quisquam amet repudiandae, necessitatibus dolore, sit
        a in sint praesentium porro ipsam illum sapiente exercitationem
        cupiditate blanditiis velit. Maxime soluta quae ex laudantium quidem
        eligendi atque pariatur rerum aperiam. Culpa ea numquam sint facere
        ipsam similique illum, porro quos eius fugit beatae natus deserunt
        molestias explicabo fugiat pariatur nulla, consectetur modi illo
        consequatur! Placeat veritatis nulla incidunt tempore saepe! Voluptatum
        pariatur atque, voluptates adipisci distinctio beatae veritatis eaque
        debitis eveniet quaerat. Dolore eligendi accusantium amet quia excepturi
        nihil, porro suscipit ducimus, velit optio quod molestiae voluptatibus!
        Obcaecati, minus facilis. Atque, sit magni repudiandae quaerat similique
        reiciendis dicta facere labore beatae illum commodi dolores velit
        molestias unde sunt tenetur perferendis iure doloribus vel, officia
        nesciunt incidunt? Dolores hic dignissimos cumque! Sint quas sunt a
        explicabo expedita porro rem quo vel iusto laboriosam cum debitis aut
        repudiandae est velit mollitia voluptates fugiat quod ab, alias soluta
        impedit labore dolor quidem? Consequuntur! Voluptatibus architecto
        praesentium sunt veniam hic obcaecati inventore debitis tempora rerum
        non! Quaerat, beatae perferendis amet iusto expedita corrupti
        praesentium blanditiis fugit velit itaque atque vitae voluptatum fugiat
        voluptatem quis? Obcaecati, itaque nulla. Beatae harum aliquid hic
        doloribus perferendis vel, nemo amet, corporis similique voluptate
        debitis, reiciendis placeat corrupti sapiente a quaerat voluptatem! Vel
        facere commodi explicabo recusandae harum illum! Harum in voluptatem
        sunt, pariatur alias ab expedita minus, nemo, adipisci repudiandae
        nostrum laboriosam eos et odit. Delectus, aliquid? Cum expedita
        praesentium quos consectetur quasi dolore adipisci harum labore
        excepturi. Dolore molestias sint quisquam. Praesentium quaerat sunt
        ratione inventore eveniet quos, quam nihil eligendi culpa optio magnam
        porro, sapiente aut tempora, sint odio aliquam impedit! Et voluptatum
        tempora voluptas ea. Qui earum cumque numquam expedita non cupiditate,
        enim laudantium quasi nostrum iste eligendi quam veritatis suscipit!
        Tempore ducimus magnam debitis labore quas rem eius corrupti sunt
        tempora saepe. Tempore, repudiandae. Minus tempore quae temporibus
        excepturi. Maiores ipsum, fugit dolore enim odit soluta, neque expedita,
        accusamus suscipit molestiae quaerat aut. Ut, ratione culpa! Sit dicta
        dolore cum earum, deleniti beatae illum! Consequuntur eaque recusandae
        eos, laboriosam commodi aliquam vero suscipit. Magnam et eos ea adipisci
        similique. Possimus magni est, voluptatum molestias officiis excepturi
        qui odit iure dolorem consectetur ex? Ad, ipsam? Sunt aliquam nam
        tempore laboriosam consequuntur sint aperiam, sed nostrum temporibus
        repellat corrupti inventore, non iure ducimus dolorem et eum deserunt
        autem excepturi quas culpa. Sequi id ea sit minima. Quis repudiandae
        odit eaque alias dolor pariatur vero praesentium magnam perferendis
        ratione? Iste eligendi dicta reiciendis quas fugiat rem amet, doloribus
        tempora libero quam soluta quasi in obcaecati, fugit culpa. Voluptatum
        molestiae aut ea illo unde, debitis ipsum blanditiis dolore magni minima
        mollitia tempore aliquam ipsam saepe voluptatibus fugiat labore dolorum,
        a quisquam earum suscipit consectetur fuga doloremque alias! Mollitia!
        Id, atque. Rerum nesciunt doloremque nemo nam beatae incidunt quis.
        Veniam sed possimus cumque illum, corrupti unde delectus pariatur ullam
        dolores! Maxime dignissimos quos porro magni corporis reprehenderit
        iusto omnis. Voluptatum beatae eius, facere ipsam culpa dolores numquam
        distinctio eaque, doloremque impedit aliquid exercitationem similique
        nihil voluptatem nesciunt ea at delectus nam in ducimus quia! Laudantium
        dolor placeat illo pariatur! Voluptatum nulla, doloribus itaque,
        aspernatur deleniti minus alias et ipsum nemo iure suscipit! Vero
        reprehenderit a nihil quo temporibus eius ab non error quod natus
        repellendus molestiae maiores, ratione optio. Cupiditate dolores
        incidunt tenetur veritatis enim est error corporis nesciunt. Nisi eos ad
        eaque ullam amet voluptates impedit quas fuga, veniam vero, molestiae
        veritatis vitae! Quo error itaque quibusdam repellat? Fuga nulla non
        ipsam placeat saepe aliquam corporis, labore soluta voluptatibus,
        dolores, omnis repellat repudiandae? Architecto magnam, ipsum saepe,
        quasi aspernatur ex libero in suscipit repellendus placeat, dicta quidem
        illum. Dolore quas autem repellendus, laborum corporis ipsum eligendi
        enim ratione exercitationem dolorum officiis nemo. Minus sit, quod nihil
        aperiam id aliquid, modi illum a non deleniti dignissimos inventore illo
        laborum. Blanditiis maiores consectetur asperiores! Est, repellendus.
        Numquam, deleniti animi quaerat amet aliquid nostrum harum odio eaque.
        Temporibus minus excepturi deserunt sit ad. Cupiditate quidem, vel nisi
        expedita inventore quas quos? Explicabo quos, omnis corporis temporibus
        ab blanditiis dolor perferendis fugit itaque rerum iste officia velit
        quis voluptate asperiores quia quae fugiat odit magni illum architecto
        nam. Ipsa rerum provident atque. Harum perspiciatis autem sunt libero ea
        commodi iusto esse fugit ipsam qui reiciendis delectus voluptate in
        excepturi quae quidem, corporis quia corrupti. Sequi, eius ea cupiditate
        asperiores obcaecati vero debitis? Adipisci quaerat eum quod nihil,
        soluta exercitationem animi perspiciatis nesciunt voluptates itaque
        incidunt sint dolore amet odio est omnis rem ullam iure ipsum? Ipsam
        minima dolorum est et architecto iure. Qui, animi rerum eos nesciunt
        natus excepturi deserunt, dicta ut nihil accusamus officiis sint maxime
        voluptatem quidem id in sequi similique harum praesentium alias? Sed
        iusto amet perspiciatis placeat ea. Beatae repudiandae vel consectetur
        eum nulla maiores tempora ex id dolorum, odio minus. Nemo officia maxime
        sed iusto dolorum molestiae fuga quidem pariatur quas est. Odio, dolor
        aspernatur! Molestiae, vero! Aspernatur voluptates consequatur, illo
        blanditiis facilis ad velit quos eum voluptatibus at quod quidem nemo
        eaque quibusdam aperiam in maiores animi tempore asperiores ipsam nobis
        deserunt? Debitis esse a dolor. Quo, cupiditate voluptas doloremque
        consectetur soluta molestias doloribus, fuga culpa aliquam pariatur ab
        perferendis repudiandae est eius officia distinctio dolore quibusdam
        quod! Nam quas expedita reprehenderit autem. Ea, officia asperiores?
        Officia quae distinctio harum voluptatem doloremque quidem odio officiis
        vero sunt quo doloribus, perferendis, nostrum eum incidunt, itaque
        repellendus unde dolorem culpa quam aut porro tempore aspernatur cumque?
        Illo, quam. Omnis incidunt in sequi nisi eos. Doloremque incidunt
        blanditiis vitae unde tempora fugit perspiciatis magnam asperiores
        aliquid consequatur laudantium labore, ullam hic quasi facere nam eum
        numquam dolore dolorum necessitatibus! Neque expedita cumque debitis
        officia nisi ullam. Accusamus magnam esse nam iusto at tempore?
        Repudiandae voluptatum ab a quibusdam error facere, nemo numquam rerum
        adipisci beatae nesciunt perferendis necessitatibus qui. Distinctio,
        ipsam illum blanditiis illo et voluptate enim labore totam fuga
        quibusdam quasi reiciendis, dolorem laboriosam, vitae magnam. Non
        aliquid eligendi mollitia, veniam velit voluptatum repudiandae beatae ad
        saepe perferendis? Blanditiis vel modi sint natus officia, enim animi
        rerum, voluptatem unde veniam a laboriosam iure hic voluptatibus tempore
        exercitationem accusamus deleniti error eveniet omnis quam dolores
        dicta? Corporis, atque debitis. Nulla ab recusandae, consectetur quidem
        tempora, rem soluta, quae ipsam ratione pariatur eos voluptatibus
        laudantium sed doloremque? Assumenda, unde sit libero architecto aut
        reiciendis. Aliquam maiores aperiam sed impedit nostrum. Tempora dicta
        numquam quas eligendi consectetur at unde vel provident iusto ullam
        ducimus laboriosam illum harum voluptates sit, quam in maxime enim
        repellat eaque reprehenderit aliquid sapiente id quia! Et. Eaque iure
        magni explicabo libero eveniet culpa, nam ut est at obcaecati corporis,
        omnis, ratione exercitationem expedita illo sapiente vitae labore.
        Aspernatur cumque accusamus vero ea omnis earum excepturi quisquam.
      </h5>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  width: 100%;
  background-color: ${primary};
  display: flex;
  flex-direction: column;

  .description-container {
    position: absolute;
    z-index: 1;
    bottom: -50%;
    left: 0;
    opacity: 0;
    width: 100%;
    padding: 3rem 10rem;
    transition: 0.6s all ease-in-out;
    background: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(24, 24, 24, 0.95) 60%,
      rgb(24, 24, 24) 100%
    );

    .text {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 20rem;
      .title {
        color: white;
        transform: scale(1);
      }

      .description {
        color: white;
        width: 50%;
      }
      .buttons {
        display: flex;
        align-items: flex-end;
        .button2 {
          transform: scale(0.75);
        }
      }
    }
  }

  .desktopImg,
  .mobileImg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: 0.6s all ease;
  }

  .mobileImg {
    display: none;
  }

  @media screen and (max-width: 750px) {
    .desktopImg {
      display: none;
    }
    .mobileImg {
      display: flex;
    }
    .swiper-slide:hover .description-container {
      left: 0;
      bottom: 0;
    }

    .description-container {
      padding: 0 3rem;

      .text {
        gap: 2rem;
        .title {
          font-size: 1.5rem;
          line-height: 1.6rem;
        }
        .description {
          width: 100%;
        }
        .buttons {
          justify-content: center;
          font-size: 5rem;
          align-items: center;
        }
      }
    }
  }
  .swiper {
    height: 90vh;
  }

  .swiper-slide:hover .description-container {
    bottom: 0;
    opacity: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    filter: drop-shadow(2px 0px 1px ${primary});
    color: ${saturatedRed};
  }

  .swiper-pagination {
    width: 100%;
    .swiper-pagination-progressbar-fill {
      border-radius: 1rem;
      background: ${saturatedRed};
      filter: drop-shadow(0px 3px 2px ${primary});
    }
  }
`;

export default Homepage;
