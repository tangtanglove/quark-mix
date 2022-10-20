<template>
	<uni-forms
		ref="form"
		:model="initialValues"
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
								v-model="initialValues[item.name]"
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
								v-model="initialValues[item.name]"
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
								v-model="initialValues[item.name]"
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
								v-model="initialValues[item.name]"
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
								v-model="initialValues[item.name]"
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
					<view v-if="item.component==='inputField'">
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
							<input
								v-model="initialValues[item.name]"
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
								style="height: 36px;line-height: 36px;"
							/>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='checkboxField'">
						<uni-forms-item
							:name="item.name"
							:value="item.value"
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
							<checkbox-group
								@change="(e)=>onCheckboxChange(e,item.name)"
							>
								<block v-for="(option ,index) in item.options" :key="index">
									<label style="margin-right: 15px; float: left;">
										<checkbox
											:value="option.value"
											:disabled="item.disabled"
											:checked="initialValues[item.name]?(initialValues[item.name].includes(option.value)):false"
											:color="item.color"
										/>{{option.text}}
									</label>
								</block>
							</checkbox-group>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='radioField'">
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
							<radio-group
								@change="(e)=>onRadioChange(e,item.name)"
							>
								<block v-for="(option ,index) in item.options" :key="index">
									<label style="margin-right: 15px; float: left;">
										<radio
											:value="option.value"
											:disabled="item.disabled"
											:checked="(initialValues[item.name]===option.value)"
											:color="item.color"
										/>{{option.text}}
									</label>
								</block>
							</radio-group>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='switchField'">
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
							<switch
								:checked="initialValues[item.name]"
								:disabled="item.disabled"
								:type="item.type"
								:color="item.color"
								@change="(e)=>onSwitchChange(e,item.name)"
							/>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='sliderField'">
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
							<slider
								:value="initialValues[item.name]"
								:min="item.min"
								:max="item.max"
								:step="item.step"
								:disabled="item.disabled"
								:activeColor="item.activeColor"
								:backgroundColor="item.backgroundColor"
								:blockSize="item.blockSize"
								:blockColor="item.blockColor"
								:showValue="item.showValue"
								@change="(e)=>onSliderChange(e,item.name)"
							/>
						</uni-forms-item>
					</view>
					<view v-if="item.component==='pickerField'">
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
							<picker
								:mode="item.mode"
								:value="initialValues[item.name]"
								:start="item.start"
								:end="item.end"
								:fields="item.fields"
								:customItem="item.customItem"
								:range="item.range"
								:rangeKey="item.rangeKey"
								:selectorType="item.selectorType"
								:disabled="item.disabled"
								@change="(e)=>onPickerChange(e,item.name)"
							>
								<view style="height: 36px; line-height: 36px;text-align: end; color: #808080;">
									<block v-if="item.mode==='selector'">
										{{!(initialValues[item.name]===null|| initialValues[item.name]===undefined) ? item.range[initialValues[item.name]] : "请选择"}}
									</block>
									<block v-if="item.mode==='multiSelector'">
										{{!(initialValues[item.name]===null|| initialValues[item.name]===undefined) ? item.range[initialValues[item.name]] : "请选择"}}
									</block>
									<block v-if="item.mode==='time'">
										{{!(initialValues[item.name]===null|| initialValues[item.name]===undefined) ? initialValues[item.name] : "请选择"}}
									</block>
									<block v-if="item.mode==='date'">
										{{!(initialValues[item.name]===null|| initialValues[item.name]===undefined) ? initialValues[item.name] : "请选择"}}
									</block>
									<uni-icons style="color: #808080;" type="right" size="15"></uni-icons>
								</view>
							</picker>
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
		<engine :body="this.actions" />
	</uni-forms>
</template>

<script>
	/**
	 * ProForm
	 */
	import Engine from '@/components/engine/engine.vue';
	import { get, post } from "@/services/action.js"
	
	export default {
		name: 'ProForm',
		props: {
			api: {
				type: String,
				default:''
			},
			apiType: {
				type: String,
				default:'POST'
			},
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
			actions: {
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
			var fields = {}
			let fieldValues = this.getFieldValues(this.body)
			let fieldKeys = Object.keys(fieldValues)
			
			fieldKeys.map((fieldKey) => {
				if(this.model[fieldKey]) {
					fields[fieldKey] = this.model[fieldKey]
				} else {
					fields[fieldKey] = fieldValues[fieldKey]
				}
			});
			
			return {
				initialValues: fields,
			};
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(async (data)=>{
					let api = this.api
					let result = null
					
					if (!api) {
						uni.showToast({
							title:"表单接口不能为空"
						})
						
						return false;
					}
					
					if (this.apiType === 'POST') {
						result = await post({
							url:this.api,
							data:data
						})
					} else {
						result = await get({
							url:this.api,
							data:data
						})
					}
					
					if (result.status === 'success') {
						uni.showToast({
							title:result.msg
						})
						
						if (result.url) {
							uni.navigateTo({
								url: result.url
							});
						}
					} else {
						uni.showToast({
							title:result.msg,
							icon:'error'
						})
					}
					
				}).catch(err =>{
					console.log('表单错误信息：', err);
				})
			},
			getFieldValues(formFields) {
				var items = {}
				formFields.map((value, index) => {
					items[value.name] = value.value;
				});
				
				return items;
			},
			onCheckboxChange(e,fieldKey) {
				// 更新初始值
				this.initialValues[fieldKey] = e.detail.value
				
				// 更新表单值
				this.$refs.form.setValue(fieldKey,e.detail.value)
			},
			onRadioChange(e,fieldKey) {
				// 更新初始值
				this.initialValues[fieldKey] = e.detail.value
				
				// 更新表单值
				this.$refs.form.setValue(fieldKey,e.detail.value)
			},
			onSwitchChange(e,fieldKey) {
				// 更新初始值
				this.initialValues[fieldKey] = e.detail.value
				
				// 更新表单值
				this.$refs.form.setValue(fieldKey,e.detail.value)
			},
			onSliderChange(e,fieldKey) {
				// 更新初始值
				this.initialValues[fieldKey] = e.detail.value
				
				// 更新表单值
				this.$refs.form.setValue(fieldKey,e.detail.value)
			},
			onPickerChange(e,fieldKey) {
				// 更新初始值
				this.initialValues[fieldKey] = e.detail.value
				
				// 更新表单值
				this.$refs.form.setValue(fieldKey,e.detail.value)
			}
		}
	};
</script>

<style lang="scss" >
	
</style>
