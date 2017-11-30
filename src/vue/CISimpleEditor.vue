<template lang="pug">
div.ci-simple-editor
  div.ci-simple-editor__panel
    ci-button.btn-add-item(color="primary" size="xs" @click="addItem('h2')") H1
    ci-button.btn-add-item(color="primary" size="xs" @click="addItem('h3')") H2
    ci-button.btn-add-item(color="primary" size="xs" @click="addItem('h4')") H3
    ci-button.btn-add-item(color="primary" size="xs" @click="addItem('p')") P
    //- ci-button.btn-add-item(color="primary" size="xs" @click="addItem('ul')") UL
    //- ci-button.btn-add-item(color="primary" size="xs" @click="addItem('ol')") OL

    ci-button.btn-add-item(color="primary" size="xs" @click="addItem('img')") IMG

  div.ci-simple-editor__main
    div.ci-simple-editor__content
      div.ci-simple-editor__item(v-for="(item, index) in items" :key="index")
        ci-form-group
          // ci-imag(v-if="item.type === 'img'" mode="auto-height" width="320"
            :src="formatImageSrc(item.value)")

          ci-textarea(v-if="item.type === 'p'" v-model="item.value" rows="5")

          ci-text(v-if="item.type === 'h2' || item.type === 'h3' || item.type === 'h4'"
            v-model="item.value")

          ci-text(v-if="item.type === 'img'" v-model="item.value")

          div.ci-text-right(size="md-3")
            ci-button(color="default" size="xs" @click="orderItem(index, -1)") Up
            ci-button(color="default" size="xs" @click="orderItem(index, 1)") Down
            ci-button(color="default" size="xs" @click="removeItem(index)") Remove

    div.ci-simple-editor__preview
      div(v-for="(item, index) in items" :key="index")
        h2(v-if="item.type == 'h2'") {{item.value}}
        h3(v-if="item.type == 'h3'") {{item.value}}
        h4(v-if="item.type == 'h4'") {{item.value}}

        p(v-if="item.type == 'p'") {{item.value}}

        ci-image(v-if="item.type === 'img'" mode="auto-height"
          :src="item.value" :width="image_width")
</template>

<script>
/**
 * @fileoverview CISimpleEditor
 * @author burning (www.cafeinit.com)
 * @version 2017.07.01
 */

import CIButton from 'ci-button'
import CIForm from 'ci-form'

export default {
  name: 'ci-simple-editor',

  components: {
    'ci-button': CIButton,
    'ci-form-group': CIForm.CIFormGroup,
    'ci-text': CIForm.CIText,
    'ci-textarea': CIForm.CITextarea,
  },

  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },

    image_width: {
      type: [ Number, String ],
      default: 480
    }
  },

  data() {
    return {
      items: this.value
    }
  },

  watch: {
    value(val) {
      this.items = val
    }
  },

  methods: {
    addItem(type) {
      this.items.push({
        type: type,
        value: ''
      })
      this.$emit('change', this.items)
    },

    removeItem(index) {
      this.items.splice(index, 1)
      this.$emit('change', this.items)
    },

    orderItem(index, step) {
      let item = this.items[index]
      let newIndex = index + step
      newIndex = (newIndex < 0) ? 0 : newIndex
      this.items.splice(index, 1)
      this.items.splice(newIndex, 0, item)
      this.$emit('change', this.items)
    }
  }
}
</script>
