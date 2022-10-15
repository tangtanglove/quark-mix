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
					<view v-if="item.component==='easyInputField'">
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
								v-model="model[item.name]"
								:value="item.value"
								:type="item.type"
								:placeholder="item.placeholder"
								:password="item.password"
								:placeholderStyle="item.placeholderStyle"
								:placeholderClass="item.placeholderClass"
								:disabled="item.disabled"
								:maxlength="item.maxlength"
								:cursorSpacing="item.cursorSpacing"
								:focus="item.focus"
								:confirmType="item.confirmType"
								:confirmHold="item.confirmHold"
								:cursor="item.cursor"
								:selectionStart="item.selectionStart"
								:selectionEnd="item.selectionEnd"
								:adjustPosition="item.adjustPosition"
								:autoBlur="item.autoBlur"
								:ignoreCompositionEvent="item.ignoreCompositionEvent"
								:alwaysEmbed="item.alwaysEmbed"
								:holdKeyboard="item.holdKeyboard"
								:safePasswordCertPath="item.safePasswordCertPath"
								:safePasswordLength="item.safePasswordLength"
								:safePasswordTimeStamp="item.safePasswordTimeStamp"
								:safePasswordNonce="item.safePasswordNonce"
								:safePasswordSalt="item.safePasswordSalt"
								:safePasswordCustomHash="item.safePasswordCustomHash"
								:randomNumber="item.randomNumber"
								:controlled="item.controlled"
								:alwaysSystem="item.alwaysSystem"
								:clearable="item.clearable"
								:autoHeight="item.autoHeight"
								:clearSize="item.clearSize"
								:prefixIcon="item.prefixIcon"
								:suffixIcon="item.suffixIcon"
								:trim="item.trim"
								:inputBorder="item.inputBorder"
								:styles="item.styles"
								:passwordIcon="item.passwordIcon"
							/>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='dataCheckboxField'">
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
							<uni-data-checkbox
								v-model="model[item.name]"
								
								:localdata="item.localdata"
								:mode="item.mode"
								:multiple="item.multiple"
								:min="item.min"
								:max="item.max"
								:wrap="item.wrap"
								:icon="item.icon"
								:selectedColor="item.selectedColor"
								:selectedTextColor="item.selectedTextColor"
								:emptyText="item.emptyText"
								:map="item.map"
							/>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='dataPickerField'">
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
							<uni-data-picker
								v-model="model[item.name]"
								:value="item.value"
								:localdata="item.localdata"
								:preload="item.preload"
								:readonly="item.readonly"
								:clearIcon="item.clearIcon"
								:ellipsis="item.ellipsis"
								:popupTitle="item.popupTitle"
								:map="item.map"
							/>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='dataSelectField'">
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
							<uni-data-select
								v-model="model[item.name]"
								:value="item.value"
								:localdata="item.localdata"
								:clear="item.clear"
								:label="item.label"
								:placeholder="item.placeholder"
								:emptyText="item.emptyText"
							/>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='datetimePickerField'">
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
							<uni-datetime-picker
								v-model="model[item.name]"
								:type="item.type"
								:value="item.value"
								:start="item.start"
								:end="item.end"
								:returnType="item.returnType"
								:border="item.border"
								:rangeSeparator="item.rangeSeparator"
								:placeholder="item.placeholder"
								:startPlaceholder="item.startPlaceholder"
								:endPlaceholder="item.endPlaceholder"
								:disabled="item.disabled"
								:clearIcon="item.clearIcon"
								:hideSecond="item.hideSecond"
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
		<button @click="submit" type="primary">提交</button>
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
			return {
				formData:this.model,
			};
		},
		methods: {
			submit(form) {
				this.$refs.form.validate().then((res)=>{
					console.log('表单数据信息：', res);
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			}
		}
	};
</script>

<style lang="scss" >
	
</style>
