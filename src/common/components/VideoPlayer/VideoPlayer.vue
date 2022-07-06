<template>
  <video controls autoplay>
    <source :src="_getMediaUrl(video.item)" :type="video.mime" />
    Desculpa, o seu dipositivo não suporta vídeos incorporados, mas você pode
    <a :href="_getMediaUrl(video.item)">baixá-lo</a>
    e assistir pelo seu reprodutor de mídia favorito!
  </video>
</template>

<script>
import utils from '../../helpers/utils'
export default {
  name: 'VideoPlayer',
  components: {},
  data() {
    return {}
  },
  props: {
    video: {
      type: Object,
      default: () => {}
    }
  },
  computed: {},
  methods: {
    ...utils
  }
}
</script>

<style lang="scss" scoped>
.video-content {
  height: 333px;
  object-fit: cover;
  z-index: -100;
  border-radius: 12px;
}
</style>
