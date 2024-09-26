import { MapPinLine } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  AddressAndPaymentContainer,
  FormTitle,
  FormContainer,
  AddressFormTitleContainer,
  InputsContainer,
  CEPInput,
  StreetInput,
  NumberInput,
  AddressComplementInput,
  OpcionalLabelContainer,
  NeighborhoodInput,
  CityInput,
  StateInput,
} from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";

const AddressFormValidationSchema = z.object({
  cep: z.number({ invalid_type_error: "Informe o CEP" }).nullable(),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  complement: z.string(),
  neighborhood: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  state: z
    .string()
    .min(1, "Informe o estado")
    .max(2, "UF deve ter duas letras"),
});

export type AddressFormData = z.infer<typeof AddressFormValidationSchema>;

export function AddressForm() {
  const { register, handleSubmit, reset } = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormValidationSchema),
    defaultValues: {
      cep: null,
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  function handleAddressSubmit(data: AddressFormData) {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem("@coffee-delivery:address", stringifiedData);

    reset();
  }

  return (
    <AddressAndPaymentContainer>
      <FormTitle>Complete seu pedido</FormTitle>
      <FormContainer
        onSubmit={handleSubmit(handleAddressSubmit)}
        {...AddressForm}
      >
        <AddressFormTitleContainer>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressFormTitleContainer>

        <InputsContainer>
          <CEPInput
            id="cep"
            type="number"
            placeholder="CEP"
            {...register("cep")}
          />
          <StreetInput
            id="street"
            type="text"
            placeholder="Rua"
            {...register("street")}
          />
          <NumberInput
            id="number"
            type="number"
            placeholder="Número"
            {...register("number")}
          />
          <AddressComplementInput
            id="complement"
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
          <OpcionalLabelContainer>
            <span>Opcional</span>
          </OpcionalLabelContainer>
          <NeighborhoodInput
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            {...register("neighborhood")}
          />
          <CityInput
            id="city"
            type="text"
            placeholder="Cidade"
            {...register("city")}
          />
          <StateInput
            id="uf"
            type="text"
            placeholder="UF"
            {...register("state")}
          />
        </InputsContainer>
      </FormContainer>
    </AddressAndPaymentContainer>
  );
}
