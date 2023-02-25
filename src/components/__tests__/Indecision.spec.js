import { describe, it, expect, beforeEach, test } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import Indecision from '../Indecision.vue'

describe('Indecision', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Indecision)
  })

  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

})