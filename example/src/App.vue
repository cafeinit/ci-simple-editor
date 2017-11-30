<template lang="pug">
  div.view-app
    ci-block
      ci-block-header(title="Simple Editor")
      ci-block-body
        ci-simple-editor
</template>

<script>
/**
 * @fileoverview App
 * @author burning <www.cafeinit.com>
 * @version 2017.11.30
 */

import CISimpleEditor from 'ci-simple-editor'

export default {
  name: 'view-app',

  components: {
    'ci-simple-editor': CISimpleEditor
  },

  methods: {
    // onClick(evt) {
    //   console.log('onClick', evt)
    // }
  }
}
</script>
