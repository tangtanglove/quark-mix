<template>
	<uni-forms
		ref="form"
		:model="model"
		:rules="rules"
		:validateTrigger="validateTrigger"
		:labelPosition="labelPosition"
		:labelWidth="labelWidth"
		:labelAlign="labelAlign"
		:errShowType="errShowType"
		:border="border"
		:style="style"
	>
		<view v-for="(item ,index) in this.body" :key="index">
			<view v-if="item.hasOwnProperty('component')">
				<view v-if="item.component.indexOf('Field')">
					<view v-if="item.component==='textField'">
						<uni-forms-item
							:name="item.name"
							:rules="item.rules"
							:required="item.required"
							:label="item.label"
							:labelWidth="item.labelWidth"
							:errorMessage="item.errorMessage"
							:labelAlign="item.labelAlign"
							:labelPosition="item.labelPosition"
							:validateTrigger="item.validateTrigger"
							:leftIcon="item.leftIcon"
							:iconColor="item.iconColor"
							:style="item.style"
						>
							<uni-easyinput
								:type="item.type"
								:placeholder="item.placeholder"
							/>
						</uni-forms-item>
					</view>
				</view>
				<view v-else>
					<engine :body="body" />
				</view>
			</view>
			<view v-else>
			  	<engine :body="body" />
			</view>
		</view>
		<button type="primary">提交</button>
	</uni-forms>
</template>

<script>
	/**
	 * ProForm
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProForm',
		props: {
			model: {
				type: Object,
				default () {
					return {}
				}
			},
			rules: {
				type: Object,
				default () {
					return {}
				}
			},
			validateTrigger: {
				type: String,
				default: 'submit'
			},
			labelPosition: {
				type: String,
				default: 'left'
			},
			labelWidth: {
				type: Number,
				default: 70
			},
			labelAlign: {
				type: String,
				default: 'left'
			},
			errShowType: {
				type: String,
				default: 'undertext'
			},
			border: {
				type: Boolean,
				default: false
			},
			body: {
				type: [String, Number, Object],
				default: ''
			},
			style: {
				type: [String, Object],
				default () {
					return {}
				}
			}
		},
		data() {
			return {};
		},
		mounted() {	
			
		}
	};
</script>

<style lang="scss" >
	
</style>
